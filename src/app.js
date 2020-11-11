const app = (function () {
    window.addEventListener('keyup', function (event) {
        if (event.altKey && event.code === 'KeyS') {
            if (document.querySelector('#visual-snow')) {
                return document.querySelector('#visual-snow').remove()
            }

            const svgOverlay = document.createElement('div');
            svgOverlay.setAttribute('id', 'visual-snow')
            svgOverlay.setAttribute('style',
                'z-index:2147483645 !important; ' +
                'pointer-events: none; ' +
                'position: fixed; left: 0; top: 0; height: 100%; width: 100%;' +
                'background: url(' + chrome.runtime.getURL('media/filter.svg') + ');'
            );

            document.body.appendChild(svgOverlay)
        }
    });
}());
