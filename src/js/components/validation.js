const aboutForm = new JustValidate('#about-form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#F06666',
  },
  focusInvalidField: false,
});

aboutForm.addField('#about-email', [
  {
    rule: 'required',
    errorMessage: 'Необходимо указать почту',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
  }
])

const contactsForm = new JustValidate('#contacts-form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#FF3030',
  },
  focusInvalidField: false,
});

contactsForm
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Необходимо указать имя',
    },
    {
      rule: 'customRegexp',
      value: /^[A-Za-zА-Яа-яЁё]+$/,
      errorMessage: 'Недопустимый формат',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Необходимо указать почту',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    }])
