const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
        let masseges = []
        if (name.value === '' || name.value == null) {
            messages.push('Name is required')
        }

        if (password.value.length <= 6) {
            message.push('password must be longer than 6 character')
        }
        if (password.value.length >= 20) {
            message.push('password must be less than 20 character')
        }
        if (password.value.length === 'password') {
            message.push('Password cannot be password')
        }

        if (messages.len > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        }
    })