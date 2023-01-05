const findMyLocation = () => {
    const status = document.querySelector('.status')
    const sucess = (position) => {
        console.log(position);
    }
    const error = () => {
        // status.textContent = 'Unable to retrieve your location';
        console.log(error);
    }

    navigator.geolocation.getCurrentPosition(sucess, error)

}
document.querySelector('.find-location').addEventListener('click', findMyLocation)

// console.log("geo location..... ");

// const sucessCallback = (position) => {
//     console.log(position);
// }
// const errorCallback = (error) => {
//     console.log(error);
// }
// navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback)

