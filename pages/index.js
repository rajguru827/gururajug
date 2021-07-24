import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gururaj</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>

      <header>

        <nav className="navbar navbar-expand-lg navbar-dark bg-black pt-5 pb-5">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img width="50" src="https://mattfarley.ca/img/mf-logo.svg" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-outline-success ml-sm-2">Say Hello</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero pt-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <h1 className="title">Front-end Developer </h1>
                <h2 className="sub-title mt-3">I design and code beautifully simple things, and I love what I do.</h2>
                <img className="avatar mt-5 mb-5" src="https://mattfarley.ca/img/mf-avatar.svg" />
              </div>
            </div>
          </div>
        </section>

        <section className="primary">
          <div className="container text-center">
            <h1 className="title">Hi, I’m Gururaj. Nice to meet you.</h1>
            <p className="text-white mt-3">Since beginning my journey as a web designer nearly 4 years ago, I've done work for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          </div>
        </section>

        <section className="exp pt-5">
          <div className="container">
            <h1 className="title">Experience</h1>

            <div className="rowm mt-5 text-center">
              <div className="col-md-12">
                <div className="job">
                  <h4 className="text-white">Infosys Ltd. (Dec, 2018 - Present)</h4>
                  <h5 className="text-white">Senior System Engineer</h5>
                </div>
                <div className="job mt-5">
                  <h4 className="text-white">Dharani Info Technologies Pvt.Ltd. (April, 2016 - Nov 2018)</h4>
                  <h5 className="text-white">UI Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="skills pt-5">
          <div className="container">
            <h1 className="title">Skills</h1>
            <div className="row pt-4">
              <div className="col-md-12">
                <ul className="skills">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>AngularJS</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');
        body {
          background-color: black;
          font-family: 'Montserrat', sans-serif;
        }
        .hero .title {
          color: #ffd330;
        }
        .sub-title {
          font-weight: 400;
          font-size: 1.5rem;
          color: #ff85a2;
        }
        .primary .title {
          color: white;
          font-size: 2rem;
        }
        
        section .title {
          color: #91c13e;
          text-align:center;
          position: relative;
        }
        section .title::after {
          content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -10px;
            width: 65px;
            height: 5px;
            background-color: white;
            margin: 0 auto;
        }
        
        ul.skills {
          display: flex;
          flex-direction: row;
          justify-content: center;
          list-style-type: none;
          padding: 0;
        }
        
        ul.skills li {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #ee3e34;
          padding: 20px;
          border-radius: 50%;
          height: 150px;
          width: 150px;
          margin-left: 10px;
        }
      `}
      </style>
    </div>
  )
}
