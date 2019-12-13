init()

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    document.querySelector('.btn-top').style.display = 'none';
}

function buttonShow () {
    if (document.body.scrollTop >= 300) {
        document.querySelector('.btn-top').style.display = 'block';
    }
}

function init () {
    topFunction()
    document.querySelector('.app-pig-click').style.display = 'none';
    document.querySelector('.app-pig-confirm').style.display = 'none';
    document.querySelector('.app-cal-click').style.display = 'none';
    document.querySelector('.app-cal-confirm').style.display = 'none';
    document.querySelector('.app-bud-click').style.display = 'none';
    document.querySelector('.app-bud-confirm').style.display = 'none';
    document.querySelector('.link-git-click').style.display = 'none';
    document.querySelector('.link-git-confirm').style.display = 'none';
    document.querySelector('.link-gmail-click').style.display = 'none';
    document.querySelector('.link-gmail-confirm').style.display = 'none';
    document.querySelector('.aboutme').style.display = 'none';
    document.querySelector('.aboutme-label').style.display = 'none';
    document.querySelector('.app-pig').style.display = 'block';
    document.querySelector('.app-pig-label').style.display = 'block';
    document.querySelector('.app-cal').style.display = 'block';
    document.querySelector('.app-cal-label').style.display = 'block';
    document.querySelector('.app-bud').style.display = 'block';
    document.querySelector('.app-bud-label').style.display = 'block';
    document.querySelector('.featured').style.display = 'block';
    document.querySelector('.featured-label').style.display = 'block';
    document.querySelector('.link').style.display = 'block';
    document.querySelector('.link-label').style.display = 'block';
    document.querySelector('.link-git-label').style.display = 'block';
    document.querySelector('.link-git').style.display = 'block';
    document.querySelector('.link-gmail-label').style.display = 'block';
    document.querySelector('.link-gmail').style.display = 'block';
    document.querySelector('.btn-page1').style.display = 'block';
    document.querySelector('.btn-page2').style.display = 'block';
}

document.querySelector('.btn-pig').addEventListener('click', function () {
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.btn-page1').style.display = 'none';
    document.querySelector('.btn-page2').style.display = 'none';
    document.querySelector('.app-pig-click').style.display = 'block';
    document.querySelector('.app-pig-confirm').style.display = 'block';
})

document.querySelector('.btn-pig-no').addEventListener('click', init);

document.querySelector('.btn-cal').addEventListener('click', function () {
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.btn-page1').style.display = 'none';
    document.querySelector('.btn-page2').style.display = 'none';
    document.querySelector('.app-cal-click').style.display = 'block';
    document.querySelector('.app-cal-confirm').style.display = 'block';
})

document.querySelector('.btn-cal-no').addEventListener('click', init);

document.querySelector('.btn-bud').addEventListener('click', function () {
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.btn-page1').style.display = 'none';
    document.querySelector('.btn-page2').style.display = 'none';
    document.querySelector('.app-bud-click').style.display = 'block';
    document.querySelector('.app-bud-confirm').style.display = 'block';
})

document.querySelector('.btn-bud-no').addEventListener('click', init);

document.querySelector('.link-git').addEventListener('click', function () {
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.btn-page1').style.display = 'none';
    document.querySelector('.btn-page2').style.display = 'none';
    document.querySelector('.link-git-click').style.display = 'block';
    document.querySelector('.link-git-confirm').style.display = 'block';
})

document.querySelector('.btn-git-no').addEventListener('click', init);

document.querySelector('.link-gmail').addEventListener('click', function () {
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.btn-page1').style.display = 'none';
    document.querySelector('.btn-page2').style.display = 'none';
    document.querySelector('.link-gmail-click').style.display = 'block';
    document.querySelector('.link-gmail-confirm').style.display = 'block';
})

document.querySelector('.btn-gmail-no').addEventListener('click', init);

document.querySelector('.btn-page1').addEventListener('click', function () {
    init();
    topFunction();
})

document.querySelector('.btn-page2').addEventListener('click', function () {
    topFunction();
    document.querySelector('.app-pig').style.display = 'none';
    document.querySelector('.app-pig-label').style.display = 'none';
    document.querySelector('.app-cal').style.display = 'none';
    document.querySelector('.app-cal-label').style.display = 'none';
    document.querySelector('.app-bud').style.display = 'none';
    document.querySelector('.app-bud-label').style.display = 'none';
    document.querySelector('.featured').style.display = 'none';
    document.querySelector('.featured-label').style.display = 'none';
    document.querySelector('.link').style.display = 'none';
    document.querySelector('.link-label').style.display = 'none';
    document.querySelector('.link-git-label').style.display = 'none';
    document.querySelector('.link-git').style.display = 'none';
    document.querySelector('.link-gmail-label').style.display = 'none';
    document.querySelector('.link-gmail').style.display = 'none';
    document.querySelector('.aboutme').style.display = 'block';
    document.querySelector('.aboutme-label').style.display = 'block';
})