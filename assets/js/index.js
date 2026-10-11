var cursor = document.querySelector(".cursor")
var cursor2 = document.querySelector(".cursor2")
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";  
  })

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0ef0ad}";
    document.body.appendChild(css);
};

const button = document.querySelector('.click-top');
const sectionToAppear = document.querySelector('.section2'); // 

button.style.opacity = '0'; 

window.addEventListener('scroll', () => {
    const sectionTop = sectionToAppear.getBoundingClientRect().top;
    
    if (sectionTop <= window.innerHeight / 2) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-scroll-to'));
    if (!target) return;
    const headerOffset = document.querySelector('header').offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  });
});

function startCounting(targetElement, targetValue, suffix) {
  const element = document.getElementById(targetElement);
  const initialValue = parseInt(element.textContent, 10);
  const step = Math.ceil(targetValue / 100);

  let current = 0;
  const interval = setInterval(() => {
    if (current <= targetValue) {
      element.textContent = current.toLocaleString() + suffix;
      current += step;
    } else {
      element.textContent = targetValue.toLocaleString() + suffix;
      clearInterval(interval);
    }
  }, 10);
}

window.addEventListener('load', () => {
  const sectionElement = document.querySelector('.section5');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target.querySelector('h1');
        const targetValue = parseInt(targetElement.textContent.replace(/\D/g, ''));

        if (targetElement.id === 'count1' || targetElement.id === 'count3') {
          startCounting(targetElement.id, targetValue, '+');
        } else if (targetElement.id === 'count2' || targetElement.id === 'count4') {
          startCounting(targetElement.id, targetValue, 'K');
        }

        observer.unobserve(entry.target);
      }
    });
  }, options);

  const h1Elements = sectionElement.querySelectorAll('h1');
  h1Elements.forEach((h1) => {
    observer.observe(h1.parentElement);
  });
});

function SendMail(event) {
  event.preventDefault();
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  var submitButton = form.querySelector(".button3");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  var params = {
    name_id: document.getElementById("name_id").value.trim(),
    email_id: document.getElementById("email_id").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };
  var formFieldIds = ["name_id", "email_id", "subject", "message"];

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  setFormStatus(status, "", "");

  emailjs.send("service_2gz7a1z", "template_vwf7v3v", params).then(function () {
    setFormStatus(status, "success", "Thanks! Your message has been sent. We'll get back to you soon.");
    form.reset();
    formFieldIds.forEach(checkInput);
  }).catch(function (error) {
    console.error("EmailJS send failed:", error);
    setFormStatus(status, "error", "Sorry, something went wrong. Please try again in a moment.");
  }).finally(function () {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  });
}

function SubscribeNewsletter(event) {
  event.preventDefault();
  var form = document.getElementById("newsletter-form");
  var emailInput = document.getElementById("newsletter_email");
  var status = document.getElementById("newsletter-status");
  var submitButton = form.querySelector(".button4");
  var email = emailInput.value.trim();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Subscribing...";
  setFormStatus(status, "", "");

  emailjs.send("service_2gz7a1z", "template_vwf7v3v", {
    name_id: "Newsletter subscriber",
    email_id: email,
    subject: "Newsletter subscription",
    message: "Please add " + email + " to the Gamestorm newsletter mailing list."
  }).then(function () {
    setFormStatus(status, "success", "You're subscribed! Welcome to the Gamestorm community.");
    form.reset();
  }).catch(function (error) {
    console.error("Newsletter signup failed:", error);
    setFormStatus(status, "error", "Sorry, we couldn't subscribe you right now. Please try again.");
  }).finally(function () {
    submitButton.disabled = false;
    submitButton.textContent = "Subscribe";
  });
}

function setFormStatus(status, kind, message) {
  status.classList.remove("success", "error");
  if (kind) {
    status.classList.add(kind);
  }
  status.textContent = message;
}

document.getElementById('newsletter_email').addEventListener('input', function () {
  setFormStatus(document.getElementById('newsletter-status'), '', '');
});
document.getElementById('contact-form').addEventListener('input', function () {
  setFormStatus(document.getElementById('contact-status'), '', '');
});
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      incrementCounter();
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5 
});


const targetElement = document.querySelector('.border-box-border');
observer.observe(targetElement);


function incrementCounter() {
  const counterElement = document.getElementById('counter');
  let counterValue = 0;
  const targetValue = 20;

  const intervalId = setInterval(() => {
    if (counterValue < targetValue) {
      counterValue++;
      counterElement.textContent = `${counterValue}+`;
    } else {
      clearInterval(intervalId); 
    }
  }, 100); 
}

var isNameChanged = false;
var isEmailChanged = false;
var isSubjectChanged = false;
var isMessageChanged = false;


function checkInput(inputID) {
    var inputValue = document.getElementById(inputID).value;

  
    if (inputValue) {
        switch (inputID) {
            case "name_id":
                isNameChanged = true;
                break;
            case "email_id":
                isEmailChanged = true;
                break;
            case "subject":
                isSubjectChanged = true;
                break;
            case "message":
                isMessageChanged = true;
                break;
        }
    } else {
        switch (inputID) {
            case "name_id":
                isNameChanged = false;
                break;
            case "email_id":
                isEmailChanged = false;
                break;
            case "subject":
                isSubjectChanged = false;
                break;
            case "message":
                isMessageChanged = false;
                break;
        }
    }
}

window.onbeforeunload = function () {
    if (isNameChanged || isEmailChanged || isSubjectChanged || isMessageChanged) {
        return "You have unsent changes in the contact form. Are you sure you want to leave?";
    }
};