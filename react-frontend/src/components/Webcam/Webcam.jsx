import { useState, useRef, useEffect } from "react";
//import { storage } from '../firebase';
//import { ref, uploadBytes } from 'firebase/storage';

import Webcam from "react-webcam";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const [image, setImage] = useState([]);
  const webcamRef = useRef(null);

  const capture = () => {
    console.log("captured in");
    const imageSrc = webcamRef.current.getScreenshot();
    setImage((prev) => {
      prev.push(imageSrc);
      return prev;
    });
    console.log(image);
  };

  async function sleep(fn, ...args) {
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 200));
    await timeout();
    return fn(...args);
  }

  const captureHandler = async () => {
    for (let i = 0; i < 10; ++i) {
      await sleep(capture);
    }
  };

  // register w xyz id xyz pass
  /*
		Registration started
		received images[10], id, password
		crosscheck for pre-existing
		if exists, return error
		else, register {
			making a firebase folder/minibucket/whatever and getting the uniqueUrl for it
			uploading images to that uniqueUrl
			register the user with the schema(id: string, password: string, uniqueUrl: URL)
		}
	*/

  /*
		Login started
		received id, password, image
		if verified {
			uniqueURL, 
			fetch images
			run script against 10 fetched images & image
			return result
		}
	*/

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={220}
          videoConstraints={videoConstraints}
        />

        {/* {image.length &&
          image.map((imgsrc, i) => {
            console.log("imgs", i);
            return <img src={imgsrc} />;
          })} */}
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("capture");
            captureHandler();
          }}
          className="webcam-btn"
        >
          Capture
        </button>
      </div>
    </div>
  );
};
