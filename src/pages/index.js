import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

// Get the IPFS hash from the BCH Blockchain.
import MemoGet from 'memo-get-gatsby'
const memoGet = new MemoGet()

// import BCHJS from '@chris.troutner/bch-js'

let _this

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    _this = this

    this.state = {
      ipfsHash: 'No Result',
      ipfsHashLink: '',
    }
  }

  async componentDidMount() {
    const addr = `bitcoincash:qr7u857krgsvq0dwe8rzlt5rcx35r6hnmu6glavtx0`
    const hash = await memoGet.read(addr)
    console.log(`hash: ${hash}`)
    this.setState({
      ipfsHash: hash,
      ipfsHashLink: `https://ipfs.io/ipfs/${hash}`,
    })

    // const bchjs = new BCHJS()
    // const balance = await bchjs.Blockbook.balance(addr)
    // console.log(`balance: ${JSON.stringify(balance, null, 2)}`)
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="Uncensorable Publishing"
          meta={[
            { name: 'description', content: 'Uncensorable Publishing' },
            {
              name: 'keywords',
              content:
                'ipfs, bch, bitcoin, bitcoin cash, web, publishing, gatsby, template',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Explore the Deep Web</h2>
              </header>
              <p>
                This internet is bigger than just the web. You can access this
                website via these links on these other networks:
              </p>
              <ul>
                <li>
                  Web:{' '}
                  <a href="https://uncensorablepublishing.com">
                    UncensorablePublishing.com
                  </a>
                </li>
                <li>
                  Tor:{' '}
                  <a href="http://3nt2u67vy7luf73j.onion">
                    3nt2u67vy7luf73j.onion
                  </a>
                </li>
                <li>
                  IPFS:{' '}
                  <a
                    href={_this.state.ipfsHashLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {this.state.ipfsHash}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>

          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
