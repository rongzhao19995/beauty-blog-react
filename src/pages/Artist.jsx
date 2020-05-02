import React, {useState, useCallback} from 'react';
import ImageViewer from "react-simple-image-viewer";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const memberList = [
  { key: "item1", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/matheus-ferrero-346656-unsplash-copy.jpg", name: "NATALIA LEAD", "pos": "Amazing hairdresser" },
  { key: "item2", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/matheus-ferrero-551834-unsplash.jpg", name: "AMANDA FEDER", "pos": "Genius make-up artist" },
  { key: "item3", img: "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/ricardo-mancia-214428-unsplash.jpg",  name: "LISA BORDEGAMET", "pos": "Master masseuses" },
];

const images = [
  "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/matheus-ferrero-346656-unsplash-copy.jpg",
  "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/matheus-ferrero-551834-unsplash.jpg",
  "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/18/2018/03/ricardo-mancia-214428-unsplash.jpg",
];

const CardSection = ({ img, name, pos, idx}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);

      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };

    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card-wrapper">
            <div className="card-img">
                  <img
                    src={img}
                    onClick={() => openImageViewer(idx)}
                    key={idx}
                    style={{ margin: "2px" }}
                    alt=""
                />
            </div>
            <div className="card-desc pt-3 pb-5">
              <div className="name py-1">{name}</div>
              <div className="pos py-2">{pos}</div>
              <div className="contact py-1">
              <FiFacebook size="1.3em"/>
              <FiTwitter size="1.3em"/>
              <FiInstagram size="1.3em"/>
              </div>
            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    className="abc"
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                />
            )}
      </div>
    );
  };

const listItems = memberList.map((obj, index) => (
    <CardSection key={obj.key} img={obj.img} name={obj.name} pos={obj.pos} idx={index}/>

));

const Artist = () => {

    const artistSectionStyle = {
        height:'100vh',
        width: '100vw'
      };

    return (
        <React.Fragment>
            <section className="artist-section"  style={artistSectionStyle}>
                <div className="container">
                    <div className="title py-6">Our wonderful specialists will take care of you</div>
                    <div className="row">
                        {listItems}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Artist;