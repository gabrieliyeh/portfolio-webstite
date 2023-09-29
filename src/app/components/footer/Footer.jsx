import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          Let's Talk
        </p>
          <div className='footer-socials'>
          <a className='mail-link' target='_blank' rel='noopener' href="mailto:gabrieliyehlive@gmail.com?subject=Lets work together! ;&body=Hello I think we need you to work on/collaborate this particular product...Reach out as soon as you can.">
            Contact me by mail
          </a>
            <a className='linkedIn-link' href="https://www.linkedin.com/in/gabriel-iyeh/" target='_blank' rel='noopener' >LN</a>
            <a className='github-link' href="https://github.com/gabrieliyeh" target='_blank' rel='noopener' >GH</a>   
          </div>
      </div>   
    </footer>
  )
}

export default Footer
