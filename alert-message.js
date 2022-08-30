
// Error message

const errorMessage = (title, text) => {
    Swal.fire({
        toast: true,
        icon: 'error',
        title: title,
        text: text,
        timer: 3000,
        showConfirmButton: false,
        position: 'top-start',
        background: 'rgba(246, 54, 54, 0.15)',
    })
}


// Succed message

const succedMessage = (title) => {
    Swal.fire({
        toast: true,
        icon: 'success',
        title: title,
        timer: 2000,
        showConfirmButton: false,
        position: 'bottom',
        background: 'rgba(16, 169, 5, 0.15)',
    })
}



