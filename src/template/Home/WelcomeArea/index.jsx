import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Web3 from "web3";
import ArtSlider from "../../../components/ArtSlider";
import abi from "../../../data/abi.json";
import contractAddress from "../../../data/address.json";

const WelcomeArea = ({data}) => {

  const [minted, setMinted] = useState(0);

  useEffect(() => {
    async function getMintedNumber() {
      const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/yrauS5JtGGbLJI0w525CUeTK2TcAsOf6");
      const contract = new web3.eth.Contract(abi, contractAddress.address);
      const _minted = await contract.methods.totalSupply().call();
      setMinted(_minted);
    }

    getMintedNumber();
  }, [])

  return (
      <section className="hero-section app section-padding" id="home">
        {/* Hero Content */}
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              {/* Welcome Content */}
              <div className="col-12 col-md-6">
                <div className="welcome-content text-center">
                  <h1 className="fadeInUp welcome-title" data-wow-delay="0.2s">{data.title}</h1>
                  <div className="promo-section">
                    <h3 className="special-head dark">{minted} / 2222 NFTs</h3>
                  </div>
                  <p className="w-text">{data.text}</p>
                  <div className="dream-btn-group">
                    <a href="https://opensea.io/collection/womans-world-nft" target="_blank" className="btn more-btn mr-3">{data.btnUp}</a>
                    <Link to="/mint" className="btn more-btn">{data.btnDown}</Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <ArtSlider/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WelcomeArea