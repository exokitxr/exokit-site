(() => {

function expandLittleNavbar() {
  document.getElementById('expandedLittleNavbar').style.height = "100vh"
  document.getElementById('expandedLittleNavbar').style.visibility = "visible"
}

 function hideLittleNavbar() {
  document.getElementById('expandedLittleNavbar').style.height = "0vh"
  document.getElementById('expandedLittleNavbar').style.visibility = "hidden"
}

/* window.addEventListener('scroll', () => {
  const textArray = document.getElementsByClassName('featureText');
  const featuresArray = document.getElementsByClassName('featureMain');
  for(let i = 0; i < featuresArray.length; i++){
    featuresArray[i].style.visibility = 'hidden'
  }
}); */

window.addEventListener('load', () => {
  const featuresWrap = document.getElementById('featureMain-wrap');
  const featuresArray = document.getElementsByClassName('featureMain');
  for (let i = 0; i < featuresArray.length; i++) {
    const el = featuresArray[i];
    const animationString = el.dataset.animation;
    if (animationString) {
      el.animations = eval(animationString);
      el.style.visibility = 'visible';
    }
  }
  const _tick = () => {
    const parentFactor = Math.min(Math.max((window.pageYOffset - (featuresWrap.offsetHeight - window.innerHeight)) / (featuresWrap.offsetHeight + window.innerHeight), 0), 1);

    for (let i = 0; i < featuresArray.length; i++) {
      const el = featuresArray[i];
      const {animations} = el;
      let transform = '';
      for (let j = 0; j < animations.length; j++) {
        const animation = animations[j];
        const {k, sp = 0, ep = 1, sv = 0, ev = 1, u = ''} = animation;
        const factor = Math.min(Math.max((parentFactor - sp) / (ep - sp), 0), 1);
        const v = sv + factor * (ev - sv);
        transform += `${k}(${v}${u})`;
      }
      el.style.transform = transform;
    }
  };
  _tick();
  window.addEventListener('scroll', _tick);
});

const changeCompany = (company) => {
  const mainImg = document.getElementById('madeWithExokitMainImg');
  const title = document.getElementById('madeWithTitle');
  const slogan = document.getElementById('madeWithSlogan');
  const titleSub = document.getElementById('madeWithTitleSub');
  const project = document.getElementById('madeWithProject');
  const year = document.getElementById('madeWithYear');

  switch (company) {
    case 'expanse':
      mainImg.src = 'media/expanse.png';
      title.innerHTML = 'The Expanse';
      slogan.innerHTML = 'Build, Experince & Share the future of social VR.';
      titleSub.innerHTML = 'The Expanse';
      project.innerHTML = 'Project: Aurora';
      year.innerHTML = 'Year 2018 - Now';
    break;
    case 'active':
      mainImg.src = 'media/activeDemoMain.png';
      title.innerHTML = 'Active Theory';
      slogan.innerHTML = 'Active Theory is a studio building creative digital experiences. We are  pushing the future of web technology.';
      titleSub.innerHTML = 'Active Theory';
      project.innerHTML = 'Project: xyz';
      year.innerHTML = 'Year 2018 - Now';

    break;
    case 'emukit':
      mainImg.src = 'media/emukitDemo.png';
      title.innerHTML = 'Emukit';
      slogan.innerHTML = 'The VR emulator solution is called Emukit and works best with Exokit, a JavaScript web browser for AR and VR environment.';
      titleSub.innerHTML = 'Emukit';
      project.innerHTML = 'Project: Nintendo 64 VR Emulation';
      year.innerHTML = 'Year 2018 - Now';
    break;

  }
}

const changeQuotes = () => {
  const json = {
    "quotes": [
      {   "picture": "media/sjw.jpg",
          "person": "- Milo Dianosuraus Rex",
          "quote": "Ree, illumanti uses Chrome against the people, free our people from Chrome, this is democracy! #exokit"
      },
      {
          "picture": "media/kylie.jpg",
          "person": "- Kiley Jenner",
          "quote": "hehe, check out my latest modeling shoot in VR/AR using this cool app called Exokit xoxo #exokit"
      },
      {
          "picture": "media/dude.jpg",
          "person": "- Steve Harley",
          "quote": "Yo my dude, Exokit is the best thing since the commodore 64. I'm telling all my bros! #exokit"
      },
      {
          "picture": "media/obama.jpg",
          "person": "- Barrack Obama",
          "quote": "During my stay at the White House, we anaylzed whether or not Exokit was going to take over Chrome."
      },

      {
          "picture": "media/emukitDemo.png",
          "person": "- Happy Rabbit",
          "quote": "Hop, jump, skip, im a rabbit AND EXOKIT IS AWESOME! xzcvzxcvzxvczx #exokit"
      },
      {
          "picture": "media/favicon.png",
          "person": "- Bruce Reslzer",
          "quote": "i love pumping iron in my sick ML headset using exokit, really gets me going ya feel me? #exokit"
      },
      {   "picture": "media/exokit.png",
          "person": "- Great Grandma",
          "quote": "I remember back in my day we didnt have things like this... #exokit"
      },
      {   "picture": "media/whatIsExokit.png",
          "person": "- Ted Druce",
          "quote": "Ayy, its a good day to be using exokit in sunny Califonria, amiright folks?"
      }
    ]
  };

  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    if('media/' + cards[i].getElementsByClassName('quotesPic')[0].src.replace(/^.*[\\\/]/, '') == json.quotes[i].picture){
      cards = document.getElementsByClassName('card');
      cards[i].getElementsByClassName('quotesPic')[0].src = json.quotes[i+4].picture;
      cards[i].getElementsByClassName('quotePerson')[0].innerHTML = json.quotes[i+4].person;
      cards[i].getElementsByClassName('quoteTitle')[0].innerHTML = json.quotes[i+4].quote;
    }
    else{
      cards = document.getElementsByClassName('card');
      cards[i].getElementsByClassName('quotesPic')[0].src = json.quotes[i].picture;
      cards[i].getElementsByClassName('quotePerson')[0].innerHTML = json.quotes[i].person;
      cards[i].getElementsByClassName('quoteTitle')[0].innerHTML = json.quotes[i].quote;
      cards[i].style.hidden = true;
    }
  }
};

})();
