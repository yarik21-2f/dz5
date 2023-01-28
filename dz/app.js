const usd = document.querySelector("#usd")
const som = document.querySelector("#som")
const lira = document.querySelector("#lira")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json");
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response);
            if(elem === som) {
                target.value = (elem.value / data.usd).toFixed(2);
                target2.value = (elem.value / data.lira).toFixed(2);
            }else if(elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2);
                target2.value = (elem.value * data.usd2).toFixed(2);
            }else if(elem === lira) {
                target.value = (elem.value * data.lira).toFixed(2);
                target2.value = (elem.value * data.lira2).toFixed(2);
                //у меня не получалось верная конвертация,поэтому я добавил в json lira2 и usd2
            }
        });
    });
}


convert(som, usd, lira);
convert(usd, som, lira);
convert(lira, som, usd);