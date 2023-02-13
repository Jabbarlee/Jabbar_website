import React from "react";
import { useState, createContext, useRef, useMemo, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
const mobileContext = createContext();

const MobileContextProvider = ({ children }) => {
  const [myImages, setMyImages] = useState();

  useEffect(() => {
    const getMyImages = async () => {
      setMyImages((await getDoc(doc(db, "MyImages", "1"))).data());
    };

    getMyImages();
  }, []);

  const myRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [stopCurrentIndex, setStopCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  const [project, setProject] = useState(null);

  const [showing, setShowing] = useState(true);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 1 };
  }, []);

  return (
    <mobileContext.Provider
      value={{
        hidden,
        setHidden,
        options,
        callbackFunction,
        isVisible,
        setIsVisible,
        myRef,
        showing,
        setShowing,
        currentIndex,
        setCurrentIndex,
        projects,
        setProjects,
        stopCurrentIndex,
        setStopCurrentIndex,
        project,
        setProject,
        myImages,
      }}
    >
      {children}
    </mobileContext.Provider>
  );
};

export { MobileContextProvider, mobileContext };
