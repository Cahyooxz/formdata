const scriptURL = 'https://script.google.com/macros/s/AKfycbzUegu4IVwhuyVh72_fn0idYEL1oS7qaTRrLV9kddprLzfL-YnzmKuwEiUCaIkQv6Xu/exec';
const form = document.forms['laporan-kinerja']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const myAlertUn = document.querySelector('.my-alert-unsend');


form.addEventListener('submit', e => {
    e.preventDefault()
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            myAlertUn.classList.toggle('d-none');
            console.error('Error!', error.message)
        })
})