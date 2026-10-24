const platformIcons = [
  'M21 19a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h18ZM19 4a2 2 0 0 1 1.995 1.85L21 6v10a2 2 0 0 1-1.85 1.995L19 18H5a2 2 0 0 1-1.995-1.85L3 16V6a2 2 0 0 1 1.85-1.995L5 4h14Zm0 2H5v10h14V6Z',
  'M15.778 8.208c-.473-.037-.98.076-1.758.373c.065-.025-.742.29-.969.37c-.502.175-.915.271-1.378.271c-.458 0-.88-.091-1.365-.255a9.885 9.885 0 0 1-.505-.186l-.449-.177c-.648-.254-1.012-.35-1.315-.342c-1.153.015-2.243.68-2.877 1.782c-1.292 2.244-.576 6.299 1.313 9.031c1.005 1.444 1.556 1.96 1.777 1.953c.222-.01.386-.057.784-.225l.166-.071c1.006-.429 1.71-.618 2.771-.618c1.021 0 1.703.186 2.669.602l.168.072c.397.17.54.208.792.202c.357-.005.798-.417 1.777-1.854c.268-.391.505-.803.71-1.22a7.375 7.375 0 0 1-.391-.347c-1.29-1.228-2.087-2.884-2.109-4.93A6.625 6.625 0 0 1 17 8.46a4.124 4.124 0 0 0-1.221-.25Zm.155-1.994c.708.048 2.736.264 4.056 2.196c-.108.06-2.424 1.404-2.4 4.212c.036 3.36 2.94 4.476 2.976 4.488c-.024.084-.468 1.596-1.536 3.156c-.924 1.356-1.884 2.7-3.396 2.724c-1.488.036-1.968-.876-3.66-.876c-1.704 0-2.232.852-3.636.912c-1.464.048-2.568-1.464-3.504-2.808c-1.908-2.76-3.36-7.776-1.404-11.172c.972-1.692 2.7-2.76 4.584-2.784c1.428-.036 2.784.96 3.66.96c.864 0 2.412-1.152 4.26-1.008Zm-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572c-.168-1.272.456-2.604 1.176-3.432c.804-.936 2.148-1.632 3.264-1.68c.144 1.296-.372 2.604-1.152 3.54Z',
  'm1.5.5l.252-.432A.5.5 0 0 0 1 .5h.5Zm0 14H1a.5.5 0 0 0 .752.432L1.5 14.5Zm12-7l.252.432a.5.5 0 0 0 0-.864L13.5 7.5ZM1 .5v14h1V.5H1Zm.752 14.432l12-7l-.504-.864l-12 7l.504.864Zm12-7.864l-12-7l-.504.864l12 7l.504-.864ZM1.829 12.876l8-7l-.658-.752l-8 7l.658.752Zm-.658-10l8 7l.658-.752l-8-7l-.658.752Z',
  'M15.626 14.62c-1.107 1.618-2.728 2.384-4.625 2.384c-2.304 0-4.277-1.773-3.993-4.124c.314-2.608 2.34-3.73 5.708-4.143c.601-.074.85-.094 2.147-.19l.138-.01v-.215C15 6.526 13.933 5.3 12.5 5.3c-1.437 0-2.44.747-3.055 2.526l-1.89-.653C8.442 4.603 10.193 3.3 12.5 3.3c2.602 0 4.5 2.178 4.5 5.022c0 2.648.163 4.755.483 5.557c.356.892.486 1.117.884 1.613l-1.56 1.251c-.524-.652-.753-1.049-1.182-2.122v-.001Zm5.631 5.925c-.27.2-.741.081-.528-.44c.264-.648.547-1.408.262-1.753c-.21-.254-.468-.381-1.027-.381c-.46 0-.69.06-.995.08c-.204.013-.294-.297-.091-.44a2.96 2.96 0 0 1 .87-.428c1.15-.344 2.505-.156 2.67.083c.365.53-.2 2.569-1.16 3.279Zm-1.182-1.084a7.548 7.548 0 0 1-.829.695c-2.122 1.615-4.871 2.46-7.258 2.46c-3.843 0-7.28-1.794-9.888-4.795c-.224-.23-.039-.566.223-.384c2.81 2.076 6.288 3.333 9.888 3.333c2.266 0 4.708-.537 7.035-1.693c.163-.077.345-.181.504-.254c.367-.21.69.306.325.638Zm-5.064-8.92c-1.259.093-1.496.113-2.052.181c-2.553.313-3.797 1.003-3.966 2.398c-.125 1.043.81 1.884 2.008 1.884c2.039 0 3.517-1.228 4.022-4.464l-.012.001Z',
  'M21.001 2.5v19l-18-2v-15l18-2Zm-2 10.499l-7 .001v5.487l7 .779v-6.267Zm-14 4.71l5 .556V13l-5-.001v4.71Zm14-6.71V4.735l-7 .777V11l7-.001Zm-9-5.265l-5 .556V11l5 .001V5.734Z',
  'M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989a4 4 0 1 1-7.923.068L1.709 14.43l.75-1.854l3.826 1.545a3.994 3.994 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4Zm-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78a2 2 0 1 0 1.981-2.28Zm3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.027 5.027 0 0 1-1.135-1.191ZM17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0 1a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z',
  'M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm.5 9a1 1 0 0 1 .117 1.993L12.5 15H9.106l-.833 1.489a1 1 0 0 1-1.797-.872l.052-.106l.286-.51H6.3a1 1 0 0 1-.117-1.994L6.3 13h6.2Zm1.893-2.988L16.066 13H17.7a1 1 0 1 1 0 2h-.514l.287.512a1 1 0 0 1-1.745.977l-3.08-5.5a1 1 0 0 1 1.745-.977Zm-2.52-4.5l.127.227l.127-.227a1 1 0 0 1 1.746.977l-3.08 5.5a1 1 0 0 1-1.745-.977l1.806-3.226l-.726-1.297a1 1 0 1 1 1.745-.977Z',
]

const gridIcon =
  'M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z'

const features = [
  { img: './assets/img/section-3-photo-1-realll.png', cls: 'boxes1' },
  { img: './assets/img/v-www1.png', cls: 'boxes3' },
  { img: './assets/img/vvv-1.png', cls: 'boxes3' },
  { img: './assets/img/viktor-moor-rocketraccoon-02.jpg', cls: 'boxes3' },
]

function FeatureCard({ img, cls }: { img: string; cls: string }) {
  return (
    <>
      <span className="boxes-containerspan"> Feature</span>
      <div className="boxes1-leftbox">
        <div className={cls}>
          <div className="box-button">Play</div>
          <img src={img} alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className="boxes1-rightbox">
        <div className="boxes2">
          <h4>Upgrade Your Weapon</h4>
          <ul className="boxesul">
            <li className="boxesulli">Horror Adventure</li>
            <li className="boxesulli">Mobile</li>
            <li className="boxesulli">Action RPG</li>
            <li>PC</li>
          </ul>

          <div className="boxes2p">
            <p>
              Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus, nec congue magna accumsan commodo
              pretium.. <span className="boxes2pspan"> Read More</span>
            </p>
          </div>
          <div className="boxes1-rightbox2">
            <div className="boxes1-rightbox2-container">
              <div className="boxes1-rightbox2-leftbox">
                <img src="./assets/img/section-3-photo-1-realll.png" alt="" />
              </div>
              <div className="boxes1-rightbox2-middlebox">
                <div className="boxes1-rightbox2-middlebox-top">
                  <svg
                    style={{ color: '#edcb50' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
                    />
                  </svg>{' '}
                  <h4>4.5</h4>
                </div>
                <div className="boxes1-rightbox2-middlebox-paragraph">
                  <p>5.2M Reviews</p>
                </div>
              </div>
              <div className="boxes1-rightbox2-rightbox">
                <h4>500M+</h4>
                <p>Downloads</p>
              </div>
            </div>
          </div>
          <div className="boxes1-rightbox2-rightbox2">
            <img src="./assets/img/appstore-2-real.png" alt="" />
            <img src="./assets/img/googleplay-real.png" alt="" />
            <img src="./assets/img/amazon-real.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default function Section3() {
  return (
    <section id="Games" className="section3">
      <div className="section3-div1">
        <h4 data-aos="fade-up">
          Crafting Unforgettable <span> Gaming Experiences</span>
        </h4>
        <h3 data-aos="fade-up">
          Our Games Are <span>Vibrant</span> Worlds With <span>Charming</span> Characters
        </h3>
        <p data-aos="fade-up">
          Our projects feature unique mechanics, fine-tuned game play, and eye-catching visual style.Over 100 million
          people play our games every month
        </p>
      </div>
      <div data-aos="zoom-out" className="section3-boxdiv1">
        <div />
        <li className="box">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
              <path d={gridIcon} />
              <path
                fill="currentColor"
                d="M21 19a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h18ZM19 4a2 2 0 0 1 1.995 1.85L21 6v10a2 2 0 0 1-1.85 1.995L19 18H5a2 2 0 0 1-1.995-1.85L3 16V6a2 2 0 0 1 1.85-1.995L5 4h14Zm0 2H5v10h14V6Z"
              />
            </g>
          </svg>
        </li>
        {platformIcons.slice(1).map((d, i) => (
          <li className="box" key={i}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="currentColor" d={d} />
            </svg>
          </li>
        ))}
      </div>
      <div className="boxes-box">
        <img src="./assets/img/section3-bg-consol-real.png" alt="" className="joystick1" />
        <img src="./assets/img/section3-bg-consol-real.png" alt="" className="joystick2" />
        <div data-aos="fade-up" className="boxes-container">
          <FeatureCard {...features[0]} />
        </div>
        {features.slice(1).map((f, i) => (
          <div data-aos="fade-up" className="boxes-container2" key={i}>
            <FeatureCard {...f} />
          </div>
        ))}
      </div>
    </section>
  )
}
