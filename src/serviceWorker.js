export default class ServiceWorker {
    static register(){
        if('serviceWorker' in navigator){
            window.addEventListener('load', () => {
                navigator.serviceWorker
                .register('./sw.js')
                .then(reg => console.log('Service worker registered successfully!'))
                .catch(err => console.log(`Service worker not registered. ${err}`))
            })
        }
    }
}