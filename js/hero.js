let renderer, scene, camera, iframe, container, engineMesh;

const localVector = new THREE.Vector3();
const localVector2 = new THREE.Vector3();
const localVector3 = new THREE.Vector3();
const localCoord = new THREE.Vector2();
const localPlane = new THREE.Plane();
const localLine = new THREE.Line3();
const localLine2 = new THREE.Line3();
const localRaycaster = new THREE.Raycaster();

function init() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
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
    directionalLight.shadow.bias = 0.0001;

    directionalLight.shadow.mapSize.width = SHADOW_MAP_WIDTH;
    directionalLight.shadow.mapSize.height = SHADOW_MAP_HEIGHT;

    container.add(directionalLight);
  }

  const groundMesh = (() => {
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
  container.add(groundMesh);

  const avatarMesh = (() => {
    const DEFAULT_SKIN_URL = 'img/skin.png';

    const mesh = skin({
      limbs: true,
    });
    mesh.castShadow = true;
    /* {
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, -1).normalize(),
        new THREE.Vector3(0, -1, -2).normalize()
      );
      mesh.material.uniforms.headRotation.value.x = quaternion.x;
      mesh.material.uniforms.headRotation.value.y = quaternion.y;
      mesh.material.uniforms.headRotation.value.z = quaternion.z;
      mesh.material.uniforms.headRotation.value.w = quaternion.w;
    }
    {
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, -1, 0).normalize(),
        new THREE.Vector3(0.5, 1, 2).normalize()
      );
      mesh.material.uniforms.leftArmRotation.value.x = quaternion.x;
      mesh.material.uniforms.leftArmRotation.value.y = quaternion.y;
      mesh.material.uniforms.leftArmRotation.value.z = quaternion.z;
      mesh.material.uniforms.leftArmRotation.value.w = quaternion.w;
    }
    {
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, -1, 0).normalize(),
        new THREE.Vector3(0, -0.9, 1).normalize()
      );
      mesh.material.uniforms.rightArmRotation.value.x = quaternion.x;
      mesh.material.uniforms.rightArmRotation.value.y = quaternion.y;
      mesh.material.uniforms.rightArmRotation.value.z = quaternion.z;
      mesh.material.uniforms.rightArmRotation.value.w = quaternion.w;
    } */

    // const uniforms = THREE.UniformsUtils.clone(skin.SKIN_SHADER.uniforms);

    new Promise((accept, reject) => {
      const skinImg = new Image();
      skinImg.crossOrigin = 'Anonymous';
      skinImg.src = DEFAULT_SKIN_URL;
      skinImg.onload = () => {
        accept(skinImg);
      };
      skinImg.onerror = err => {
        reject(err);
      };
    })
      .then(skinImg => {
        mesh.setImage(skinImg);
      });

    return mesh;
  })();
  container.add(avatarMesh);

  engineMesh = (() => {
    const object = new THREE.Object3D();
    object.basePosition = new THREE.Vector3(-1, 0, -1);
    object.nextUpdateTime = 0;
    object.exobotMeshes = [];

    const loader = new THREE.ColladaLoader();
    loader.load('models/car_engine.dae', o => {
      o = o.scene;
      o.traverse(e => {
        e.castShadow = true;
      });

      o.position.set(0, -0.2, 0);
      o.scale.set(0.2, 0.2, 0.2);
      object.add(o);
    });

    return object;
  })();
  container.add(engineMesh);

  const mouse = {
    x: 0,
    y: 0,
  };
  const _applyUniformRotation = (r, t) => {
    t.x = r.x;
    t.y = r.y;
    t.z = r.z;
    t.w = r.w;
  };
  const _updateSkin = () => {
    _applyUniformRotation(
      new THREE.Quaternion()
        .setFromUnitVectors(
          new THREE.Vector3(0, 0, -1),
          new THREE.Vector3(-(mouse.x-0.5)*2, (mouse.y-0.5)*2, -1).normalize()
        ),
        avatarMesh.material.uniforms.headRotation.value
    );
    _applyUniformRotation(
      new THREE.Quaternion()
        .setFromUnitVectors(
          new THREE.Vector3(0, -1, 0),
          new THREE.Vector3(0.5 - (mouse.x-0.5)*2, 1 - (mouse.y-0.5)*2, 2).normalize()
        ),
        avatarMesh.material.uniforms.leftArmRotation.value
    );
    _applyUniformRotation(
      new THREE.Quaternion()
        .setFromUnitVectors(
          new THREE.Vector3(0, 0, -1),
          new THREE.Vector3(-(mouse.x-0.5)*2, -(mouse.y-0.5)*2, -1).normalize()
        ),
        avatarMesh.material.uniforms.rightArmRotation.value
    );
  };
  _updateSkin();

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
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
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
    const mesh = new THREE.Mesh(boxGeometry.clone().applyMatrix(new THREE.Matrix4().makeScale(1, 1, 0.4)), material);
    mesh.position.set(-1, 1.5, -1.5);

    const labelMesh = (() => {
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
    mesh.add(labelMesh);

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
    mesh.position.set(-1, 1.5, -1.5 - 0.4/2);
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

    const labelMesh = (() => {
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
    mesh.add(labelMesh);

    return mesh;
  })();
  container.add(tabMesh2);

  const assetsMesh = (() => {
    const object = new THREE.Object3D();

    [
      {size: new THREE.Vector2(3, 3), position: new THREE.Vector3(0, 1, -2), src: 'assets/Group 57@2x.png'},
      {size: new THREE.Vector2(5, 5), position: new THREE.Vector3(0, 1, -3), src: 'assets/Group 19@2x.png'},
      {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(0, 2, -1), src: 'assets/Group 17@2x.png'},
      {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-0.5, 2, -1), src: 'assets/Group 31@2x.png'},
      {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-0.5, 0.5, -1), src: 'assets/Group 31@2x.png'},
      {size: new THREE.Vector2(0.5, 0.5), position: new THREE.Vector3(-1, 1.5, -1), src: 'assets/Group 17@2x.png'},
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

  scene.add(container);

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;

    container.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(-(mouse.x-0.5)*0.5, (mouse.y-0.5)*0.5, -1).normalize()
    );
    _updateSkin();
  });
  window.addEventListener('resize', e => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    _setCamera();
  });

  focused = true;
}

init();

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
    tranansparent: true,
    alphaTest: 0.9,
  });
  return () => new THREE.Mesh(geometry, material);
})();
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

  renderer.render(scene, camera);

  lastUpdateTime = now;
}
renderer.setAnimationLoop(animate);
