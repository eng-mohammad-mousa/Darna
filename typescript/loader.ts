let x: number,
    loadingDiv = document.getElementById("loadingDiv") as HTMLDivElement,
    body = document.querySelector("body") as HTMLBodyElement;

window.onload = function (): void {
    setTimeout(removeLoadingDiv, 300);
}

function removeLoadingDiv(): void {

    loadingDiv.style.opacity = '1';

    const fadeEffect = setInterval(function () {
        x = +loadingDiv.style.opacity;
        if (x > 0) {
            loadingDiv.style.opacity = `${x - 0.1}`;
        } else {
            clearInterval(fadeEffect);
            loadingDiv.remove();
            body.style.overflowY = 'visible';
        }

    }, 30);
}

// tsc --watch
