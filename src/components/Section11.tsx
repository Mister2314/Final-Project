import emailjs from '@emailjs/browser'
import { useFormDirtyGuard } from '../hooks'

function SendMail() {
  const params = {
    name_id: (document.getElementById('name_id') as HTMLInputElement).value,
    email_id: (document.getElementById('email_id') as HTMLInputElement).value,
    subject: (document.getElementById('subject') as HTMLInputElement).value,
    message: (document.getElementById('message') as HTMLTextAreaElement).value,
  }
  emailjs.send('service_2gz7a1z', 'template_vwf7v3v', params, 'jiBeXM6uAI-ZEhXCi').then(function (res) {
    alert('Success!' + res.status)
    location.reload()
  })
}

export default function Section11() {
  const { onInput } = useFormDirtyGuard()
  return (
    <section id="Contact" className="section11">
      <div className="s11-container">
        <div className="s11-leftbox">
          <div className="s11-leftbox-container">
            <div className="s11-leftbox-texts">
              <h4 data-aos="fade-up">
                Have <span>Questions?</span>
              </h4>
              <h3 data-aos="fade-up">
                We'd Love To <br /> <span>Hear From You</span>
              </h3>
              <p data-aos="fade-up">
                Please fill out the form and let us know about your concerns.We will <br /> try our best to provide
                optimized solutions.
              </p>
            </div>
            <div className="s11-iconboxes">
              <div data-aos="fade-up" className="s11-iconboxes-1">
                <div className="iconboxes-1-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path
                      fill="#0ef0ad"
                      d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9Zm8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z"
                    />
                  </svg>
                </div>
                <a className="lets-talk" href="https://wa.me/994507032186">
                  <p>(050) 703 -21 - 86</p>
                </a>
              </div>
              <div data-aos="fade-up" className="s11-iconboxes-1">
                <div className="iconboxes-1-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32">
                    <path
                      fill="none"
                      stroke="#0ef0ad"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"
                    />
                  </svg>
                </div>
                <p>xeyalhuseynli06@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="s11-rightbox">
          <div data-aos="zoom-out" className="form-container">
            <div className="form-box">
              <div data-aos="fade-up" className="form1">
                <label> Name</label>
                <br />
                <input
                  id="name_id"
                  onInput={(e) => onInput('name_id', e.currentTarget.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div data-aos="fade-up" className="form1">
                <label>Email</label>
                <br />
                <input
                  id="email_id"
                  onInput={(e) => onInput('email_id', e.currentTarget.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div data-aos="fade-up" className="form1">
                <label>Subject</label>
                <br />
                <input
                  id="subject"
                  onInput={(e) => onInput('subject', e.currentTarget.value)}
                  type="text"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div data-aos="fade-up" className="form4">
                <label>Leave us a message</label>
                <br />
                <textarea
                  id="message"
                  placeholder="Please Type Your Message Here"
                  required
                  onInput={(e) => onInput('message', e.currentTarget.value)}
                />
              </div>
              <div data-aos="zoom-out" className="button-box">
                <button onClick={SendMail} className="button3">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
