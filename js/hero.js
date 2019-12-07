import './three.min.js';
import './BufferGeometryUtils.js';
import './Reflector.js';
import Avatar from 'https://avatars.exokit.org/avatars.js';
import ModelLoader from 'https://model-loader.exokit.org/model-loader.js';
import {XRRaycaster, XRChunker} from 'https://spatial-engine.exokit.org/spatial-engine.js';

(async () => {

const header = document.getElementById('header');
const mainSelector = document.getElementById('main-selector');
mainSelector.addEventListener('focus', () => {
  mainSelector.classList.add('open');
});
mainSelector.addEventListener('blur', () => {
  mainSelector.classList.remove('open');
});
const mainOptions = Array.from(mainSelector.querySelectorAll('.option'));
for (let i = 0; i < mainOptions.length; i++) {
  const mainOption = mainOptions[i];
  mainOption.addEventListener('click', e => {
    if (!header.classList.contains(`main-${i+1}`)) {
      for (let i = 0; i < mainOptions.length; i++) {
        header.classList.remove(`main-${i+1}`);
        mainOptions[i].classList.remove('open');
      }
      mainOption.classList.add('open');
      mainSelector.blur();
      mainSelector.dispatchEvent(new CustomEvent('blur'));
      header.classList.add(`main-${i+1}`);
    }
  });
}

let renderer, scene, camera, iframe, mouse, container, avatarMesh, engineMesh, meteorMesher;

const localVector = new THREE.Vector3();
const localVector2 = new THREE.Vector3();
const localVector3 = new THREE.Vector3();
const localMatrix = new THREE.Matrix4();
const localRaycaster = new THREE.Raycaster();
const localColor = new THREE.Color();

// function init() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('hero-canvas'),
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.sortObjects = false;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  // window.browser.magicleap.RequestDepthPopulation(true);
  // renderer.autoClear = false;

  scene = new THREE.Scene();
  scene.matrixAutoUpdate = false;
  // scene.background = new THREE.Color(0xFFFFFF);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
  // camera.lookAt(new THREE.Vector3());
  scene.add(camera);

  const SCENES = {
    desktop: {
      camera: new THREE.Vector3(-1.5, 1, 2),
    },
    mobile: {
      camera: new THREE.Vector3(0, 1.8, 2),
    },
  };
  const _setCamera = () => {
    const SCENE = SCENES[window.innerWidth >= 800 ? 'desktop' : 'mobile'];
    camera.position.copy(SCENE.camera);

    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  };
  _setCamera();

  container = new THREE.Object3D();

  const ambientLight = new THREE.AmbientLight(0x808080);
  scene.add(ambientLight);

  {
    const SHADOW_MAP_WIDTH = 1024;
    const SHADOW_MAP_HEIGHT = 1024;

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(-3, 3, 1);
    directionalLight.target.position.set(0, 0, 0);

    directionalLight.castShadow = true;

    directionalLight.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 0.1, 1000 ) );
    // directionalLight.shadow.bias = 0.0001;

    directionalLight.shadow.mapSize.width = SHADOW_MAP_WIDTH;
    directionalLight.shadow.mapSize.height = SHADOW_MAP_HEIGHT;

    container.add(directionalLight);
  }

  const floorMesh = (() => {
    const geometry = new THREE.PlaneBufferGeometry(100, 100);
    const material = new THREE.MeshPhongMaterial({
      color: 0xCCCCCC,
    });
    const mesh = new THREE.Mesh(geometry, material);

    // mesh.position.set(0, 0, 0);
    mesh.rotation.x = -Math.PI/2;
    // mesh.scale.set( 100, 100, 100 );

    // mesh.castShadow = false;
    mesh.receiveShadow = true;

    return mesh;
  })();
  container.add(floorMesh);

  let rig = null;
  (async () => {
    const model = await ModelLoader.loadModelUrl('./miku.vrm');
    rig = new Avatar(model, {
      fingers: true,
      hair: true,
      visemes: true,
      // decapitate: possessRig,
      // microphoneMediaStream,
      // debug: !newModel,
    });
    container.add(rig.model);
  })();
  (async () => {
    const src = 'https://item-models.exokit.org/glb/apocalypse/SM_Generic_Tree_01.glb';
    const object = await ModelLoader.loadModelUrl(src);
    const model = object.scene;
    model.position.x = 0.5;
    model.position.z = -1;
    container.add(model);
  })();

  const width = 10;
  const height = 10;
  const depth = 10;
  const colorTargetSize = 64;
  const voxelSize = 0.1;
  const marchCubesTexSize = 2048;
  const fov = 90;
  const aspect = 1;
  const raycastNear = 0.1;
  const raycastFar = 100;
  const raycastDepth = 3;

  const depthMaterial = (() => {
    const depthVsh = `
      // uniform float uAnimation;
      // attribute float typex;
      // varying vec3 vPosition;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }
    `;
    const depthFsh = `
      uniform float uNear;
      uniform float uFar;

      /* vec4 encodePixelDepth( float v ) {
        vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * v;
        enc = fract(enc);
        // enc -= enc.xyzw * vec4(1.0/255.0,1.0/255.0,1.0/255.0,1.0/255.0);
        return enc;
      } */
      // const float infinity = 1./0.;
      vec4 encodePixelDepth( float v ) {
        float x = fract(v);
        v -= x;
        v /= 255.0;
        float y = fract(v);
        v -= y;
        v /= 255.0;
        float z = fract(v);
        /* v -= y;
        v /= 255.0;
        float w = fract(v);
        float w = 0.0;
        if (x == 0.0 && y == 0.0 && z == 0.0 && w == 0.0) {
          return vec4(0.0, 0.0, 0.0, 1.0);
        } else { */
          return vec4(x, y, z, 0.0);
        // }
      }
      void main() {
        float originalZ = uNear + gl_FragCoord.z / gl_FragCoord.w * (uFar - uNear);
        gl_FragColor = encodePixelDepth(originalZ);
      }
    `;
    return new THREE.ShaderMaterial({
      uniforms: {
        uNear: {
          type: 'f',
          value: 0,
        },
        uFar: {
          type: 'f',
          value: 0,
        },
      },
      vertexShader: depthVsh,
      fragmentShader: depthFsh,
      // transparent: true,
    });
  })();

  const voxelsGeometry = (() => {
    const cubeGeometry = new THREE.BoxBufferGeometry(voxelSize, voxelSize, voxelSize)
      .toNonIndexed();
    const cubeBarycentrics = new Float32Array(cubeGeometry.attributes.position.array.length/3*4);
    for (let i = 0; i < cubeBarycentrics.length/(2*6); i++) {
      cubeBarycentrics[i*12] = 0;
      cubeBarycentrics[i*12+1] = 1;

      cubeBarycentrics[i*12+2] = 0;
      cubeBarycentrics[i*12+3] = 0;

      cubeBarycentrics[i*12+4] = 1;
      cubeBarycentrics[i*12+5] = 1;

      cubeBarycentrics[i*12+6] = 0;
      cubeBarycentrics[i*12+7] = 0;

      cubeBarycentrics[i*12+8] = 1;
      cubeBarycentrics[i*12+9] = 0;

      cubeBarycentrics[i*12+10] = 1;
      cubeBarycentrics[i*12+11] = 1;
    }
    cubeGeometry.setAttribute('barycentric', new THREE.BufferAttribute(cubeBarycentrics, 2));
    const positions = new Float32Array(cubeGeometry.attributes.position.array.length*width*height*depth);
    const barycentrics = new Float32Array(cubeGeometry.attributes.barycentric.array.length*width*height*depth);
    const coords = new Float32Array(cubeGeometry.attributes.position.array.length*width*height*depth);
    const positionCenters = new Float32Array(cubeGeometry.attributes.position.array.length*width*height*depth);
    let i = 0;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        for (let z = 0; z < depth; z++) {
          const newCubeGeometry = cubeGeometry.clone()
            .applyMatrix(localMatrix.makeTranslation(x*voxelSize, y*voxelSize, z*voxelSize));
          positions.set(newCubeGeometry.attributes.position.array, i*newCubeGeometry.attributes.position.array.length);
          barycentrics.set(newCubeGeometry.attributes.barycentric.array, i*newCubeGeometry.attributes.barycentric.array.length);
          const offset = Float32Array.from([x, y, z]);
          for (let j = 0; j < newCubeGeometry.attributes.position.array.length/3; j++) {
            coords.set(offset, i*newCubeGeometry.attributes.position.array.length + j*3);
          }
          const center = Float32Array.from([x*voxelSize + 0.5*voxelSize, y*voxelSize + 0.5*voxelSize, z*voxelSize + 0.5*voxelSize]);
          for (let j = 0; j < newCubeGeometry.attributes.position.array.length/3; j++) {
            positionCenters.set(center, i*newCubeGeometry.attributes.position.array.length + j*3);
          }
          i++;
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('barycentric', new THREE.BufferAttribute(barycentrics, 2));
    geometry.setAttribute('coord', new THREE.BufferAttribute(coords, 3));
    geometry.setAttribute('positionCenter', new THREE.BufferAttribute(positionCenters, 3));
    return geometry;
  })();
  const marchCubesMaterial = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `\
      attribute vec3 barycentric;
      varying vec3 vPosition;
      varying vec3 vBC;
      void main() {
        vBC = barycentric;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        vPosition = modelViewPosition.xyz;
        gl_Position = projectionMatrix * modelViewPosition;
      }
    `,
    fragmentShader: `\
      uniform sampler2D uCameraTex;
      varying vec3 vPosition;
      varying vec3 vBC;

      vec3 color = vec3(0.984313725490196, 0.5490196078431373, 0.0);
      vec3 lightDirection = vec3(0.0, 0.0, 1.0);

      float edgeFactor() {
        vec3 d = fwidth(vBC);
        vec3 a3 = smoothstep(vec3(0.0), d*1.5, vBC);
        return min(min(a3.x, a3.y), a3.z);
      }

      void main() {
        float barycentricFactor = (0.2 + (1.0 - edgeFactor()) * 0.8);
        vec3 xTangent = dFdx( vPosition );
        vec3 yTangent = dFdy( vPosition );
        vec3 faceNormal = normalize( cross( xTangent, yTangent ) );
        float lightFactor = dot(faceNormal, lightDirection);
        gl_FragColor = vec4((0.5 + color * barycentricFactor) * lightFactor, 0.5 + barycentricFactor * 0.5);
        // gl_FragColor = vec4((0.5 + color * barycentricFactor) * lightFactor, 1.0);
      }
    `,
    // side: THREE.BackSide,
    /* polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -4, */
    transparent: true,
    // depthWrite: false,
    extensions: {
      derivatives: true,
    },
  });

  const volumeTargetGeometry = (() => {
    const edgeWidth = 0.01;
    const edgeGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries([
      new THREE.BoxBufferGeometry(edgeWidth, 0.4, edgeWidth)
        .applyMatrix(new THREE.Matrix4().makeTranslation(0, -0.4/2, 0)),
      new THREE.BoxBufferGeometry(edgeWidth, 0.4, edgeWidth)
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, 1))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0.4/2)),
      new THREE.BoxBufferGeometry(edgeWidth, 0.4, edgeWidth)
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(1, 0, 0))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0.4/2, 0, 0)),
    ]);
    const portalTargetGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries([
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, 0.5, 0)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, -1, 0))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -0.5, 0)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, 0.5, 1)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0.5, 0.5, 0)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0))))
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0.5, 0.5, 1)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1))))
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, -1, 0))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(-0.5, -0.5, 1)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0))))
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, -1, 0))))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0.5, -0.5, 0)),
      edgeGeometry.clone()
        .applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(-1, 1, 0).normalize(), new THREE.Vector3(1, -1, 0).normalize())))
        .applyMatrix(new THREE.Matrix4().makeTranslation(0.5, -0.5, 1)),
    ]);
    return THREE.BufferGeometryUtils.mergeBufferGeometries([
      portalTargetGeometry
        .clone()
        .applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -0.5)),
      new THREE.BoxBufferGeometry(0.1, edgeWidth, edgeWidth),
      new THREE.BoxBufferGeometry(edgeWidth, 0.05, edgeWidth).applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.05/2, 0)),
      new THREE.BoxBufferGeometry(edgeWidth, edgeWidth, 0.05).applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -0.05/2)),
    ]);
  })();
  const volumeMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x333333),
    /* transparent: true,
    opacity: 0.1, */
  });
  const _makeVolumeMesh = () => {
    const mesh = new THREE.Mesh(volumeTargetGeometry, volumeMaterial);
    mesh.frustumCulled = false;
    return mesh;
  };

  const raycasterCamera = new THREE.PerspectiveCamera();
  const _hideUiMeshes = () => {
    const oldGpuParticlesMeshVisible = gpuParticlesMesh.visible;
    gpuParticlesMesh.visible = false;
    const unhideXrChunks = xrChunker.chunks.map(chunk => {
      const oldVolumeMeshVisible = chunk.volumeMesh.visible;
      chunk.volumeMesh.visible = false;
      const oldVoxelsMeshVisible = chunk.voxelsMesh.visible;
      chunk.voxelsMesh.visible = false;
      const oldMarchCubesMeshVisible = chunk.marchCubesMesh.visible;
      chunk.marchCubesMesh.visible = false;
      return () => {
        chunk.volumeMesh.visible = oldVolumeMeshVisible;
        chunk.voxelsMesh.visible = oldVoxelsMeshVisible;
        chunk.marchCubesMesh.visible = oldMarchCubesMeshVisible;
      };
    });

    return () => {
      gpuParticlesMesh.visible = oldGpuParticlesMeshVisible;
      for (let i = 0; i < unhideXrChunks.length; i++) {
        unhideXrChunks[i]();
      }
    };
  };
  const _renderRaycaster = ({target, near, far, matrixWorld, projectionMatrix}) => {
    const unhideUiMeshes = _hideUiMeshes();

    raycasterCamera.near = near;
    raycasterCamera.far = far;
    raycasterCamera.matrixWorld.fromArray(matrixWorld).decompose(raycasterCamera.position, raycasterCamera.quaternion, raycasterCamera.scale);
    raycasterCamera.projectionMatrix.fromArray(projectionMatrix);

    scene.overrideMaterial = depthMaterial;
    depthMaterial.uniforms.uNear.value = near;
    depthMaterial.uniforms.uFar.value = far;
    renderer.setRenderTarget(target);
    renderer.setClearColor(localColor.set(0, 0, 0), 1);
    renderer.render(scene, raycasterCamera);
    scene.overrideMaterial = null;
    renderer.setClearColor(localColor.set(0, 0, 0), 0);

    unhideUiMeshes();

    renderer.setRenderTarget(null);
  };
  const xrRaycaster = new XRRaycaster({
    width: colorTargetSize,
    height: colorTargetSize,
    renderer,
    fov,
    aspect,
    near: raycastNear,
    far: raycastFar,
    depth: raycastDepth,
    onRender: _renderRaycaster,
  });
  xrRaycaster.updateView([-0.5, 0.5, -1],
    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI*0.2)
      .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI*0.1))
      .toArray()
  );
  const xrChunker = new XRChunker();
  xrChunker.addEventListener('addchunk', e => {
    const {data: chunk} = e;

    container.add(chunk.object);

    const volumeMesh = _makeVolumeMesh();
    chunk.object.add(volumeMesh);
    chunk.volumeMesh = volumeMesh;

    const potentialsTexture = new THREE.DataTexture(null, (width+1)*(height+1)*(depth+1), 1, THREE.LuminanceFormat, THREE.FloatType, THREE.UVMapping, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.NearestFilter, THREE.NearestFilter);
    chunk.potentialsTexture = potentialsTexture;
    const voxelsMaterial = (() => {
      const voxelsVsh = `
        attribute vec3 coord;
        attribute vec2 barycentric;
        uniform sampler2D uPotentialsTex;
        // varying float vPotential;
        varying vec2 vBC;
        varying vec3 vPosition;
        void main() {
          float ux = (coord.x + coord.y*${((width+1)*(depth+1)).toFixed(8)} + coord.z*${(width+1).toFixed(8)} + 0.5) / ${((width+1)*(height+1)*(depth+1)).toFixed(8)};
          vec2 uv = vec2(ux, 0.5);
          float potential = texture2D(uPotentialsTex, uv).r;
          vBC = barycentric;
          if (potential > 0.0) {
            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            vPosition = modelViewPosition.xyz;
            gl_Position = projectionMatrix * modelViewPosition;
          } else {
            gl_Position = vec4(0.0);
          }
        }
      `;
      const voxelsFsh = `
        // varying float vPotential;
        varying vec2 vBC;
        varying vec3 vPosition;

        vec3 color = vec3(0.984313725490196, 0.5490196078431373, 0.0);
        vec3 lightDirection = vec3(0.0, 0.0, 1.0);

        float edgeFactor() {
          float f = 0.0;
          if (vBC.x <= 0.02) {
            f = max(1.0, f);
          } else {
            f = max(1.0 - (vBC.x-0.02)/0.02, f);
          }
          if (vBC.x >= 0.98) {
            f = max(1.0, f);
          } else {
            f = max((vBC.x-0.96)/0.02, f);
          }
          if (vBC.y <= 0.02) {
            f = max(1.0, f);
          } else {
            f = max(1.0 - (vBC.y-0.02)/0.02, f);
          }
          if (vBC.y >= 0.98) {
            f = max(1.0, f);
          } else {
            f = max((vBC.y-0.96)/0.02, f);
          }
          return f;
        }

        void main() {
          float barycentricFactor = (0.2 + edgeFactor() * 0.8);
          vec3 xTangent = dFdx( vPosition );
          vec3 yTangent = dFdy( vPosition );
          vec3 faceNormal = normalize( cross( xTangent, yTangent ) );
          float lightFactor = dot(faceNormal, lightDirection);
          gl_FragColor = vec4((0.5 + color * barycentricFactor) * lightFactor, 0.5 + barycentricFactor * 0.5);
          // gl_FragColor = vBC;
          // gl_FragColor.a = 1.0;
          // gl_FragColor = vec4(color, vPotential);
        }
      `;
      return new THREE.ShaderMaterial({
        uniforms: {
          uPotentialsTex: {
            type: 't',
            value: potentialsTexture,
          },
        },
        vertexShader: voxelsVsh,
        fragmentShader: voxelsFsh,
        transparent: true,
        // depthWrite: false,
        extensions: {
          derivatives: true,
        },
      });
    })();
    chunk.voxelsMaterial = voxelsMaterial;
    /* const voxelsTexturedMaterial = (() => {
      const voxelsVsh = `
        attribute vec3 coord;
        attribute vec3 positionCenter;
        uniform sampler2D uPotentialsTex;
        uniform sampler2D uCameraTex;
        // varying float vPotential;
        varying vec3 vPosition;
        varying vec4 vColor;
        void main() {
          float ux = (coord.x + coord.y*${((width+1)*(depth+1)).toFixed(8)} + coord.z*${(width+1).toFixed(8)} + 0.5) / ${((width+1)*(height+1)*(depth+1)).toFixed(8)};
          vec2 voxelUv = vec2(ux, 0.5);
          float potential = texture2D(uPotentialsTex, voxelUv).r;
          if (potential > 0.0) {
            vec4 projectionPositionCenter = projectionMatrix * modelViewMatrix * vec4(positionCenter, 1.0);
            vec3 screenPosition = (projectionPositionCenter.xyz/projectionPositionCenter.w)/2.0+0.5;
            vec2 uv = screenPosition.xy;
            vColor = texture2D(uCameraTex, uv);
            // vColor = vec4(1.0, 0.0, 1.0, 1.0);

            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            vPosition = modelViewPosition.xyz;
            gl_Position = projectionMatrix * modelViewPosition;
          } else {
            gl_Position = vec4(0.0);
          }
        }
      `;
      const voxelsFsh = `
        uniform sampler2D uCameraTex;
        // varying float vPotential;
        varying vec3 vPosition;
        varying vec4 vColor;

        vec3 lightDirection = vec3(0.0, 0.0, 1.0);

        void main() {
          vec3 xTangent = dFdx( vPosition );
          vec3 yTangent = dFdy( vPosition );
          vec3 faceNormal = normalize( cross( xTangent, yTangent ) );
          float lightFactor = dot(faceNormal, lightDirection);

          gl_FragColor.rgb = vColor.rgb * lightFactor;
          gl_FragColor.a = 1.0;
        }
      `;
      return new THREE.ShaderMaterial({
        uniforms: {
          uPotentialsTex: {
            type: 't',
            value: potentialsTexture,
          },
          uCameraTex: {
            type: 't',
            value: cameraTarget.texture,
          },
        },
        vertexShader: voxelsVsh,
        fragmentShader: voxelsFsh,
        // transparent: true,
        extensions: {
          derivatives: true,
        },
      });
    })();
    chunk.voxelsTexturedMaterial = voxelsTexturedMaterial; */

    const voxelsMesh = (() => {
      const geometry = voxelsGeometry;
      const material = voxelsMaterial;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.needsUpload = false;
      mesh.update = potentials => {
        potentialsTexture.image.data = potentials;

        mesh.visible = true;

        mesh.needsUpload = true;
        potentialsTexture.needsUpdate = true;
        potentialsTexture.onUpdate = () => {
          mesh.needsUpload = false;
          potentialsTexture.onUpdate = null;
        };
      };
      return mesh;
    })();
    voxelsMesh.visible = false;
    chunk.object.add(voxelsMesh);
    chunk.voxelsMesh = voxelsMesh;

    /* const marchCubesRenderTarget = new THREE.WebGLRenderTarget(marchCubesTexSize, marchCubesTexSize, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      // type: THREE.FloatType,
      depthBuffer: true,
      stencilBuffer: false,
    });

    const marchCubesTexturedMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uMarchCubesTex: {
          type: 't',
          value: marchCubesRenderTarget.texture,
        },
      },
      vertexShader: `\
        attribute vec3 barycentric;
        attribute vec2 uv2;
        varying vec2 vUv;
        void main() {
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
          vUv = uv2;
        }
      `,
      fragmentShader: `\
        uniform sampler2D uMarchCubesTex;
        varying vec2 vUv;

        void main() {
          gl_FragColor = texture2D(uMarchCubesTex, vUv);
          gl_FragColor.rgb += 0.2;
          gl_FragColor.a = 1.0;
        }
      `,
      transparent: true,
    });
    chunk.marchCubesTexturedMaterial = marchCubesTexturedMaterial; */
    const marchCubesMesh = (() => {
      const geometry = new THREE.BufferGeometry();
      const material = marchCubesMaterial;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(1, 1, 1).multiplyScalar(voxelSize);
      mesh.frustumCulled = false;
      mesh.visible = false;
      mesh.needsUpload = false;
      mesh.update = (positions, barycentrics, uvs, uvs2) => {
        if (positions.length > 0) {
          const positionsAttribute = new THREE.BufferAttribute(positions, 3);
          geometry.setAttribute('position', positionsAttribute);
          geometry.setAttribute('barycentric', new THREE.BufferAttribute(barycentrics, 3));
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
          geometry.setAttribute('uv2', new THREE.BufferAttribute(uvs2, 2));

          mesh.needsUpload = true;
          positionsAttribute.onUploadCallback = () => {
            mesh.needsUpload = false;
            positionsAttribute.onUploadCallback = null;
          };

          mesh.visible = true;

          /* if (meshingTextureSwitchWrap.classList.contains('on')) {
            const unhideUiMeshes = _hideUiMeshes();

            renderer.setRenderTarget(marchCubesRenderTarget);
            renderer.autoClear = false;
            renderer.render(marchCubesRenderScene, camera);
            renderer.autoClear = true;

            unhideUiMeshes();
            renderer.setRenderTarget(null);
          } */
        } else {
          mesh.visible = false;
        }
      };
      return mesh;
    })();
    marchCubesMesh.visible = false;
    chunk.object.add(marchCubesMesh);
    chunk.marchCubesMesh = marchCubesMesh;

    /* const marchCubesRenderMesh = (() => {
      const {geometry} = marchCubesMesh;
      const material = marchCubesRenderMaterial;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(chunk.object.position);
      mesh.scale.copy(marchCubesMesh.scale);
      mesh.frustumCulled = false;
      return mesh;
    })();
    const marchCubesRenderScene = new THREE.Scene();
    marchCubesRenderScene.add(marchCubesRenderMesh); */

    chunk.addEventListener('update', e => {
      const {data: {potentials, positions, barycentrics, uvs, uvs2}} = e;
      // voxelsMesh.update(potentials);
      marchCubesMesh.update(positions, barycentrics, uvs, uvs2);
    });
  });
  xrChunker.addEventListener('removechunk', e => {
    const {data: chunk} = e;

    chunk.potentialsTexture.dispose();
    chunk.marchCubesMesh.geometry.dispose();
    chunk.voxelsMaterial.dispose();
    // chunk.voxelsTexturedMaterial.dispose();
    // chunk.marchCubesTexturedMaterial.dispose();

    container.remove(chunk.object);
  });
  xrChunker.updateTransform(
    [-1, 1, -2],
    [0, 0, 0, 1],
    [2, 2, 2]
  );

  const gpuParticlesMeshMaterial = (() => {
    const depthVsh = `
      // uniform float uAnimation;
      // attribute float typex;
      // varying vec3 vPosition;
      uniform mat4 uMatrixWorld;
      uniform mat4 uProjectionMatrixInverse;
      uniform vec3 uDirection;
      uniform sampler2D uDepthTex;
      uniform float uNear;
      uniform float uFar;
      ${XRRaycaster.decodePixelDepthGLSL}
      void main() {
        float xFactor = uv.x;
        float yFactor = uv.y;
        float z = decodePixelDepth(texture2D(uDepthTex, vec2(xFactor, 1.0-yFactor)));

        vec2 coords = vec2(xFactor * 2. - 1., -yFactor * 2. + 1.);
        vec3 origin = (uMatrixWorld * uProjectionMatrixInverse * vec4(coords.x, coords.y, ( uNear + uFar ) / ( uNear - uFar ), 1.0)).xyz;
        vec3 direction = uDirection;

        vec3 p = position + origin + direction * z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
      }
    `;
    const depthFsh = `
      // const float infinity = 1./0.;
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    `;
    return new THREE.ShaderMaterial({
      uniforms: {
        uMatrixWorld: {
          type: 'm4',
          value: new THREE.Matrix4(),
        },
        uProjectionMatrixInverse: {
          type: 'm4',
          value: new THREE.Matrix4(),
        },
        uDirection: {
          type: 'v3',
          value: new THREE.Vector3(),
        },
        uNear: {
          type: 'f',
          value: 0,
        },
        uFar: {
          type: 'f',
          value: 1,
        },
        uDepthTex: {
          type: 't',
          value: null,
        },
      },
      vertexShader: depthVsh,
      fragmentShader: depthFsh,
      // transparent: true,
    });
  })();
  const gpuParticlesMesh = (() => {
    const cubeGeometry = new THREE.BoxBufferGeometry(0.01, 0.01, 0.01).toNonIndexed();
    const positions = new Float32Array(cubeGeometry.attributes.position.array.length*xrRaycaster.width*xrRaycaster.height);
    const numVecs = cubeGeometry.attributes.position.array.length/3;
    const uvs = new Float32Array(numVecs*2*colorTargetSize*colorTargetSize);

    let i = 0;
    for (let x = 0; x < colorTargetSize; x++) {
      for (let y = 0; y < colorTargetSize; y++) {
        const xFactor = x / colorTargetSize;
        const yFactor = y / colorTargetSize;

        positions.set(cubeGeometry.attributes.position.array, i*cubeGeometry.attributes.position.array.length);
        for (let j = 0; j < numVecs; j++) {
          uvs[i*numVecs*2 + j*2] = xFactor;
          uvs[i*numVecs*2 + j*2 + 1] = yFactor;
        }
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    const material = gpuParticlesMeshMaterial;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    mesh.update = () => {
      // xrRaycaster.updateView(camera.position.toArray(), camera.quaternion.toArray());
      // xrRaycaster.updateTexture();

      gpuParticlesMeshMaterial.uniforms.uMatrixWorld.value.copy(xrRaycaster.camera.matrixWorld);
      gpuParticlesMeshMaterial.uniforms.uProjectionMatrixInverse.value.copy(xrRaycaster.camera.projectionMatrixInverse);
      gpuParticlesMeshMaterial.uniforms.uDirection.value.set(0, 0, -1).transformDirection(xrRaycaster.camera.matrixWorld);
      gpuParticlesMeshMaterial.uniforms.uNear.value = xrRaycaster.camera.near;
      gpuParticlesMeshMaterial.uniforms.uFar.value = xrRaycaster.camera.far;
      gpuParticlesMeshMaterial.uniforms.uDepthTex.value = xrRaycaster.getDepthTexture();
    };
    return mesh;
  })();
  // container.add(gpuParticlesMesh);

  engineMesh = (() => {
    const object = new THREE.Object3D();
    object.basePosition = new THREE.Vector3(-1, 0, -1);
    object.nextUpdateTime = 0;
    object.exobotMeshes = [];

    const loader = new THREE.GLTFLoader().setPath( 'models/' );
    loader.load( 'engine.glb', function ( o ) {

      o = o.scene;
      o.traverse(e => {
        e.castShadow = true;
      });

      o.position.set(0, 0.15, 0);
      o.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(0, 0, 1)
      );
      o.scale.set(0.15, 0.15, 0.15);
      o.updateMatrixWorld();
      object.add(o);

    }, undefined, function ( e ) {

      console.error( e );

    } );

    return object;
  })();
  container.add(engineMesh);

  const exobotMesh = (() => {
    const object = new THREE.Object3D();
    object.rotation.order = 'YXZ';
    object.basePosition = new THREE.Vector3(-1, 1.5, -1);
    object.scale.set(0.2, 0.2, 0.2);

    const loader = new THREE.GLTFLoader().setPath( 'models/' );
    loader.load( 'exobot.glb', function ( o ) {

      o = o.scene;
      o.traverse(e => {
        e.castShadow = true;
      });

      /* o.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(0, 0, 1)
      ); */
      o.updateMatrixWorld();
      object.add(o);

    }, undefined, function ( e ) {

      console.error( e );

    } );

    return object;
  })();
  container.add(exobotMesh);

  mouse = {
    x: 0.5,
    y: 0.5,
  };
  /* const _applyUniformRotation = (r, t) => {
    t.x = r.x;
    t.y = r.y;
    t.z = r.z;
    t.w = r.w;
  };
  const _updateSkin = () => {
    const headQuaternion = new THREE.Quaternion()
      .setFromUnitVectors(
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(-(mouse.x-0.5)*2, (mouse.y-0.5)*2, -1).normalize()
      );
    _applyUniformRotation(
      headQuaternion,
      avatarMesh.material.uniforms.headRotation.value
    );
    _applyUniformRotation(
      new THREE.Quaternion()
        .setFromUnitVectors(
          new THREE.Vector3(0, -1, 0),
          new THREE.Vector3(0.5 - (mouse.x-0.5)*2, 1 - (mouse.y-0.5)*2, 2).normalize()
        ).premultiply(
          new THREE.Quaternion()
            .setFromUnitVectors(
              new THREE.Vector3(0, 0, -1),
              new THREE.Vector3(1, 0, 0)
            )
        ),
        avatarMesh.material.uniforms.leftArmRotation.value
    );
    _applyUniformRotation(
      new THREE.Quaternion()
        .setFromUnitVectors(
          new THREE.Vector3(-1, 0, 0),
          new THREE.Vector3((mouse.x-0.5)*2, 0.5-(mouse.y-0.5)*2, -2).normalize()
        ).premultiply(
          new THREE.Quaternion()
            .setFromUnitVectors(
              new THREE.Vector3(0, 0, -1),
              new THREE.Vector3(-1, 0, 0)
            )
        ),
        avatarMesh.material.uniforms.rightArmRotation.value
    );
    avatarMesh.material.uniforms.theta.value = (mouse.y-0.5)*0.1*Math.PI;
  };
  _updateSkin(); */

  const boxGeometry = (() => {
    const BAG_SIZE = 1;
    const BAG_Y_OFFSET = -0.5;
    const BAG_Z_OFFSET = -0.05;

    const _decomposeObjectMatrixWorld = object => _decomposeMatrix(object.matrixWorld);
    const _decomposeMatrix = matrix => {
      const position = new THREE.Vector3();
      const rotation = new THREE.Quaternion();
      const scale = new THREE.Vector3();
      matrix.decompose(position, rotation, scale);
      return {position, rotation, scale};
    };

    const zeroVector = new THREE.Vector3(0, 0, 0);
    const zeroQuaternion = new THREE.Quaternion();
    const oneVector = new THREE.Vector3(1, 1, 1);
    const localVector = new THREE.Vector3();
    const localVector2 = new THREE.Vector3();
    const localQuaternion = new THREE.Quaternion();
    const localMatrix = new THREE.Matrix4();

    const lineGeometry = new THREE.CylinderBufferGeometry(BAG_SIZE/100, BAG_SIZE/100, BAG_SIZE, 3, 1);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(lineGeometry.attributes.position.array.length * 12);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // axis
    positions.set(
      lineGeometry.clone().applyMatrix(
        localMatrix.makeTranslation(-BAG_SIZE/2, 0, -BAG_SIZE/2)
      ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 0
    );
    positions.set(
      lineGeometry.clone().applyMatrix(
        localMatrix.makeTranslation(BAG_SIZE/2, 0, -BAG_SIZE/2)
      ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 1
    );
    positions.set(
      lineGeometry.clone().applyMatrix(
        localMatrix.makeTranslation(-BAG_SIZE/2, 0, BAG_SIZE/2)
      ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 2
    );
    positions.set(
      lineGeometry.clone().applyMatrix(
        localMatrix.makeTranslation(BAG_SIZE/2, 0, BAG_SIZE/2)
      ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 3
    );
    // axis
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(0, 0, 1), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(0, -BAG_SIZE/2, -BAG_SIZE/2)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 4
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(0, 0, 1), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(0, -BAG_SIZE/2, BAG_SIZE/2)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 5
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(0, 0, 1), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(0, BAG_SIZE/2, -BAG_SIZE/2)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 6
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(0, 0, 1), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(0, BAG_SIZE/2, BAG_SIZE/2)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 7
    );
    // axis
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(1, 0, 0), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(-BAG_SIZE/2, -BAG_SIZE/2, 0)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 8
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(1, 0, 0), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(-BAG_SIZE/2, BAG_SIZE/2, 0)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 9
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(1, 0, 0), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(BAG_SIZE/2, -BAG_SIZE/2, 0)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 10
    );
    positions.set(
      lineGeometry.clone()
        .applyMatrix(
          localMatrix.makeRotationFromQuaternion(localQuaternion.setFromAxisAngle(localVector.set(1, 0, 0), Math.PI/2))
        )
        .applyMatrix(
          localMatrix.makeTranslation(BAG_SIZE/2, BAG_SIZE/2, 0)
        ).attributes.position.array,
      lineGeometry.attributes.position.array.length * 11
    );
    const numLinePositions = lineGeometry.attributes.position.array.length / 3;
    const indices = new Uint16Array(lineGeometry.index.array.length * 12);
    for (let i = 0; i < 12; i++) {
      indices.set(
        lineGeometry.index.array,
        lineGeometry.index.array.length * i
      );

      for (let j = 0; j < lineGeometry.index.array.length; j++) {
        lineGeometry.index.array[j] += numLinePositions;
      }
    }
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    return geometry;

    /* const material = new THREE.MeshBasicMaterial({
      color: 0x101010,
      // wireframe: true,
      // transparent: true,
    });
    // material.polygonOffsetFactor = -1;
    material.polygonOffsetUnits = -10;

    return () => new THREE.Mesh(geometry, material); */
  })();

  /* const boxMesh = (() => {
    // const geometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      // wireframe: true,
    });
    const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(0.3, 0.3, 0.3)), material);

    const glassesMesh = (() => {
      // const geometry = new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(0.35, 0.15, 0.05));
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        // wireframe: true,
      });
      const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(0.35, 0.15, 0.05)), material);
      mesh.position.set(0, 0.07, -0.3/2 - 0.05/2);

      const eyeMesh = (() => {
        const geometry = new THREE.PlaneBufferGeometry(0.3, 0.1);
        const material = new THREE.MeshBasicMaterial({
          color: 0xec407a,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.position.set(0.09, 0, -0.05/2);
        mesh.position.set(0, 0, -0.05/2);
        return mesh;
      })();
      mesh.add(eyeMesh);

      const leftFrameMesh = (() => {
        const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(0.05, 0.05, 0.3)), material);
        mesh.position.set(-0.18, 0.07, 0.3/2 + 0.05/2);
        mesh.rotation.x = -0.1 * Math.PI;
        mesh.rotation.order = 'YXZ';
        return mesh;
      })();
      mesh.add(leftFrameMesh);
      const rightFrameMesh = (() => {
        const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(0.05, 0.05, 0.3)), material);
        mesh.position.set(0.18, 0.07, 0.3/2 + 0.05/2);
        mesh.rotation.x = -0.1 * Math.PI;
        mesh.rotation.order = 'YXZ';
        return mesh;
      })();
      mesh.add(rightFrameMesh);
      const backFrameMesh = (() => {
        const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(0.3, 0.05, 0.05)), material);
        mesh.position.set(0, 0.13, 0.34);
        mesh.rotation.x = -0.1 * Math.PI;
        mesh.rotation.order = 'YXZ';
        return mesh;
      })();
      mesh.add(backFrameMesh);

      return mesh;
    })();
    mesh.add(glassesMesh);

    return mesh;
  })();
  container.add(boxMesh); */

  const tabMesh1 = (() => {
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      // wireframe: true,
    });
    const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(1, 1, 0)), material);
    mesh.position.set(-1, 1.5, -1.5);

    /* const labelMesh = (() => {
      const geometry = new THREE.PlaneBufferGeometry(1, 0.2);
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024 * 0.2;
      // canvas.style.backgroundColor = 'red';
      const ctx = canvas.getContext('2d');
      ctx.font = '140px -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      ctx.fillText('http://A-Frame', 0, 150);
      // window.document.body.appendChild(canvas);
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        alphaTest: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 0.7;
      return mesh;
    })();
    mesh.add(labelMesh); */

    return mesh;
  })();
  container.add(tabMesh1);

  const innerMesh = (() => {
    const geometry = new THREE.PlaneBufferGeometry(1, 1);
    const mesh = new THREE.Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: 1024 * window.devicePixelRatio,
      textureHeight: 1024 * window.devicePixelRatio,
      color: 0x889999,
      addColor: 0x300000,
      recursion: 1
    });
    // mesh.position.set(-1, 1.5, -2.1);
    mesh.position.set(-1, 1.5, -1.5);
    /* mesh.rotation.order = 'YXZ';
    mesh.rotation.y = Math.PI; */
    /* const material = new THREE.MeshBasicMaterial({
      color: 0xFF0000,
    });
    const mesh = new THREE.Mesh(geometry, material); */
    return mesh;
  })();
  container.add(innerMesh);

  const tabMesh2 = (() => {
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      // wireframe: true,
    });
    const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(1, 1, 0.4)), material);
    mesh.position.set(0.5, 1.5, -1);
    mesh.rotation.y = -0.25*Math.PI;
    mesh.rotation.order = 'YXZ';

    /* const labelMesh = (() => {
      const geometry = new THREE.PlaneBufferGeometry(1, 0.2);
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024 * 0.2;
      // canvas.style.backgroundColor = 'red';
      const ctx = canvas.getContext('2d');
      ctx.font = '140px -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      ctx.fillText('http://Babylon.js', 0, 150);
      // window.document.body.appendChild(canvas);
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.5,
        // depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 0.7;
      return mesh;
    })();
    mesh.add(labelMesh); */

    return mesh;
  })();
  container.add(tabMesh2);

  const assetsMesh = (() => {
    const object = new THREE.Object3D();

    [
      {size: new THREE.Vector2(3, 3), position: new THREE.Vector3(0, 1, -2), src: 'assets/Group 57@2x.png'},
      {size: new THREE.Vector2(5, 5), position: new THREE.Vector3(0, 1, -3), src: 'assets/Group 19@2x.png'},
      // {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(0, 2, -1), src: 'assets/Group 17@2x.png'},
      // {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-0.5, 2, -1), src: 'assets/Group 31@2x.png'},
      // {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-0.5, 0.5, -1), src: 'assets/Group 31@2x.png'},
      // {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-1, 1.5, -1), src: 'assets/Group 17@2x.png'},
      // {size: new THREE.Vector2(1, 1), position: new THREE.Vector3(1, 2, -2.5), src: 'assets/Group 174@2x.png'},
      {size: new THREE.Vector2(1, 1), position: new THREE.Vector3(1, 2, -2.5), src: 'assets/Section 1@2x.png'},
    ].forEach(({size, position, src}) => {
      const geometry = new THREE.PlaneBufferGeometry(size.x, size.y);
      const texture = new THREE.Texture();
      new Promise((accept, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = src;
        img.onload = () => {
          accept(img);
        };
        img.onerror = err => {
          reject(err);
        };
      })
        .then(img => {
          texture.image = img;
          texture.needsUpdate = true;
        });
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        alphaTest: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      // mesh.castShadow = true;
      object.add(mesh);
    });

    return object;
  })();
  container.add(assetsMesh);

  meteorMesher = new THREE.Object3D();
  meteorMesher.nextUpdateTime = 0;
  meteorMesher.meteorMeshes = [];
  container.add(meteorMesher);

  scene.add(container);

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;

    camera.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(-(mouse.x-0.5)*0.5, (mouse.y-0.5)*0.5, -1).normalize()
    );
    /* container.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(-(mouse.x-0.5)*0.5, (mouse.y-0.5)*0.5, -1).normalize()
    ); */
    // _updateSkin();
  });
  window.addEventListener('resize', e => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    _setCamera();
  });
// }

// init();

const _makeExobotMesh = (() => {
  const geometry = new THREE.PlaneBufferGeometry(0.3, 0.3);
  const texture = new THREE.Texture();
  new Promise((accept, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = 'media/logo.png';
    img.onload = () => {
      accept(img);
    };
    img.onerror = err => {
      reject(err);
    };
  })
    .then(img => {
      texture.image = img;
      texture.needsUpdate = true;
    });
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.9,
  });
  return () => new THREE.Mesh(geometry, material);
})();
const _makeMeteorMaterial = src => {
  const texture = new THREE.Texture();
  new Promise((accept, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => {
      accept(img);
    };
    img.onerror = err => {
      reject(err);
    };
  })
    .then(img => {
      texture.image = img;
      texture.needsUpdate = true;
    });
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    alphaTest: 0.5,
  });
  return material;
};
const METEORS = [
  {geometry: new THREE.PlaneBufferGeometry(0.6, 0.6), material: _makeMeteorMaterial('assets/Group 17@2x.png')},
  {geometry: new THREE.PlaneBufferGeometry(0.6, 0.6), material: _makeMeteorMaterial('assets/Group 31@2x.png')},
];
const _makeMeteorMesh = () => {
  const {geometry, material} = METEORS[Math.floor(Math.random() * METEORS.length)];

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(10 - 1, 10 + (Math.random()-0.5)*3, -1 + (Math.random()-0.5)*1);
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3((Math.random()-0.5)*0.2, 1, 0).normalize()
  );
  const scale = 0.5 + Math.random();
  mesh.scale.set(scale, scale, scale);
  mesh.speed = 0.3 + Math.random()*0.3;
  // mesh.castShadow = true;

  return mesh;
};
let lastUpdateTime = Date.now();
let lastRattleTime = Date.now();
let lastRattleDirection = false;
function animate() {
  const now = Date.now();
  const timeDiff = now - lastUpdateTime;

  {
    const rattleTimeDiff = now - lastRattleTime;
    if (rattleTimeDiff > 40) {
      engineMesh.position
        .copy(engineMesh.basePosition)
        .add(localVector.set(
          0.004 * (lastRattleDirection ? 1 : -1),
          0,//Math.random() * 0.015,
          0//Math.random() * 0.01,
        ));
      lastRattleTime = now;
      lastRattleDirection = !lastRattleDirection;
    }
  }

  if (now > engineMesh.nextUpdateTime) {
    const exobotMesh = _makeExobotMesh();
    exobotMesh.quaternion.setFromUnitVectors(
      localVector.set(0, 1, 0),
      localVector2.set((Math.random()-0.5), 1, (Math.random()-0.5)*2).normalize()
    );
    const baseScale = 0.5 + Math.random();
    exobotMesh.baseScale = baseScale;
    exobotMesh.scale.set(baseScale, baseScale, baseScale);
    exobotMesh.startTime = now;
    exobotMesh.endTime = exobotMesh.startTime + 3000;
    engineMesh.add(exobotMesh);
    engineMesh.exobotMeshes.push(exobotMesh);

    engineMesh.nextUpdateTime = now + (0.2 + Math.random()*0.5)*1000;
  }
  engineMesh.exobotMeshes = engineMesh.exobotMeshes.filter(exobotMesh => {
    if (now < exobotMesh.endTime) {
      exobotMesh.position.add(localVector.set(
        0,
        0.0008 * timeDiff,
        0
      ).applyQuaternion(exobotMesh.quaternion));
      const scale = exobotMesh.baseScale * (1 - (now - exobotMesh.startTime) / (exobotMesh.endTime - exobotMesh.startTime));
      exobotMesh.scale.set(scale, scale, scale);
      return true;
    } else {
      engineMesh.remove(exobotMesh);
      return false;
    }
  });

  const timeBase = 2000;
  const factor = (now / timeBase) % timeBase;
  exobotMesh.position
    .copy(exobotMesh.basePosition)
    .add(localVector.set(0, Math.sin(factor * Math.PI*2)*0.1, 0))
    .add(localVector.set((mouse.x - 0.5)*2*2, -(mouse.y - 0.5)*2*2, 0));
  exobotMesh.rotation.z = Math.sin(factor * Math.PI*2/2)*0.2;

  if (rig) {
    rig.inputs.hmd.position.set(0, 1.33, 0);
    rig.inputs.leftGamepad.position.set(0.3, 0.7, 0.1);
    rig.inputs.leftGamepad.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/2*0.7);
    rig.inputs.leftGamepad.pointer = 1;
    rig.inputs.leftGamepad.grip = 1;
    rig.inputs.rightGamepad.position.set(-0.2, 1, 0);
    rig.inputs.rightGamepad.position.add(
      new THREE.Vector3(0, 0, -0.3)
        .applyQuaternion(new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, -1),
          exobotMesh.position.clone().sub(rig.inputs.rightGamepad.position).normalize()
        ))
    );
    rig.inputs.rightGamepad.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, -1),
      exobotMesh.position.clone().sub(rig.inputs.rightGamepad.position).normalize()
    ).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2*0.3));
    rig.inputs.rightGamepad.pointer = 0;
    rig.inputs.rightGamepad.grip = 1;
    rig.update();
  }

  if (now > meteorMesher.nextUpdateTime) {
    const meteorMesh = _makeMeteorMesh();
    meteorMesher.add(meteorMesh);
    meteorMesher.meteorMeshes.push(meteorMesh);

    meteorMesher.nextUpdateTime = now + 0.3*1000;
  }
  meteorMesher.meteorMeshes = meteorMesher.meteorMeshes.filter(meteorMesh => {
    meteorMesh.position.add(localVector.set(
      1,
      1,
      0
    ).multiplyScalar(-0.005 * timeDiff * meteorMesh.speed).applyQuaternion(meteorMesh.quaternion));
    if (meteorMesh.position.y > -1/2) {
      return true;
    } else {
      meteorMesher.remove(meteorMesh);
      return false;
    }
  });

  // gpuParticlesMesh.update();
  xrChunker.updateMesh(async () => {
    // xrRaycaster.updateView(camera.position.toArray(), camera.quaternion.toArray());
    xrRaycaster.updateTexture();
    await XRRaycaster.nextFrame();
    xrRaycaster.updateDepthBuffer();
    xrRaycaster.updatePointCloudBuffer();
    return {
      width: xrRaycaster.width,
      voxelSize,
      marchCubesTexSize,
      pointCloudBuffer: xrRaycaster.getPointCloudBuffer(),
    };
  });

  renderer.render(scene, camera);
  xrRaycaster.render();
  xrChunker.render();
  lastUpdateTime = now;
}
renderer.setAnimationLoop(animate);

/* window.addEventListener("scroll", e =>{
  if(window.scrollY > window.innerHeight){
    renderer.setAnimationLoop(null);
  }
  else{
    renderer.setAnimationLoop(animate);
  }
});

window.addEventListener("load", () =>{
  const featuresWrap = document.getElementById('featureMain-wrap');
  const gradient = featuresWrap.querySelector('.gradient');
  const rgba_JSON = [
    { // blue
      startFactor: 0/5,
      endFactor: 1/5,
      color1: "rgb(47, 134, 222)",
      color2: "rgb(142, 76, 170)",
    },
    { // purple
      startFactor: 1/5,
      endFactor: 2/5,
      color1: "rgb(142, 76, 170)",
      color2: "rgb(222, 122, 20)",
    },
    { //orange
      startFactor: 2/5,
      endFactor: 3/5,
      color1: "rgb(222, 122, 20)",
      color2: "rgb(240, 5, 5)",
    },
    { //bright green
      startFactor: 3/5,
      endFactor: 4/5,
      color1: "rgb(240, 5, 5)",
      color2: "rgb(142, 76, 170)",
    }, 
    { //bright green
      startFactor: 4/5,
      endFactor: 5/5,
      color1: "rgb(142, 76, 170)",
      color2: "#2196f3",
    },
  ];

  const _tick = () =>{
    const bodyBox = document.body.getBoundingClientRect();
    const parentBox = featuresWrap.getBoundingClientRect();
    const parentBoxAbs = {
      top: parentBox.top - bodyBox.top,
      height: parentBox.height,
    };
    const parentFactor = Math.min(Math.max((window.pageYOffset - parentBoxAbs.top) / (parentBoxAbs.height - window.innerHeight), 0), 1);

    if (parentFactor > 0) {
      if (parentFactor < 1) {
        for (let i = 0; i < rgba_JSON.length-1; i++) {
          const j = rgba_JSON[i];
          const j2 = rgba_JSON[i+1];

          if (parentFactor >= j.startFactor && parentFactor <= j.endFactor) {
            const lerpFactor = (parentFactor - j.startFactor) / (j.endFactor - j.startFactor);
            const topColor = new THREE.Color(j.color1).lerp(new THREE.Color(j.color2), lerpFactor).getHexString();
            const bottomColor = new THREE.Color(j2.color1).lerp(new THREE.Color(j2.color2), lerpFactor).getHexString();

            gradient.style.background = `linear-gradient(to bottom, #${topColor} 0%, #${bottomColor} 100%)`;
            break;
          }
        }
        gradient.style.position = 'fixed';
        gradient.style.top = 0;
        gradient.style.bottom = '';
      } else {
        gradient.style.position = 'absolute';
        gradient.style.top = '';
        gradient.style.bottom = 0;
        gradient.style.background = `linear-gradient(${rgba_JSON[rgba_JSON.length-1].color1} 0%, ${rgba_JSON[rgba_JSON.length-1].color2} 100%)`;
      }
    } else {
      gradient.style.position = 'absolute';
      gradient.style.top = 0;
      gradient.style.bottom = '';
      gradient.style.background = `linear-gradient(to bottom, #2f86de 0%, #8e4caa 100%)`;
    }
  };
  _tick();
  window.addEventListener("scroll", _tick);
}); */

})();