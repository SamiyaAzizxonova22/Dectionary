import React, { useEffect, useState } from "react";
import search from "../icons/iconoir_search.svg";
import play from "../icons/play.svg";
import linkIcon from '../icons/linkIcon.svg'
import { ErrorInfo } from "react";
import useRequest from "../hooks/useRequest";
let audioEl = null
function Info() {
  const [name, setName] = useState('')
  const [words, setWord] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('name', name)
    setWord(localStorage.getItem('name'))
    // console.log(data)
  }
  useEffect(() => {
    if (localStorage.getItem('name')) {
      setWord(localStorage.getItem('name'))
    }
  }, [name])
  const { data, loading, error, setError } = useRequest(`https://api.dictionaryapi.dev/api/v2/entries/en/${words ? words : 'keyboard'} `)
  if (data) {
    const { word, phonetics, meanings, sourceUrls } = data[0]
    phonetics.forEach((item) => {
      if (item.audio.length > 10) {
        audioEl = new Audio(item.audio);
        console.log("salom");
      }
    })
    {
      return (
        <div className="mt-12">
          <div className="flex">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative">
                <input
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  type='text'
                  id="default-search"
                  className=" block p-4 w-full  pl-6 text-sm text-gray-900 border font-bold border-[#A445ED] rounded-2xl bg-purple-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none">
                  <img src={search} alt="" />
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="flex justify-between mt-[45px]">
              <div >
                <h1 className="font-bold text-6xl">{word}</h1>
                <p className="text-2xl font-normal text-[#A445ED] mt-2">{phonetics[0].text}</p>
              </div>
              <div onClick={() => {
                audioEl && audioEl.play();
              }} className="bg-[#A445ED] bg-opacity-25 rounded-full w-[75px] h-[75px]">
                <img className="pt-7 pl-8" src={play} alt="" />
              </div>
            </div>
            <div className="flex items-center mt-10">
              <p className="font-bold text-2xl italic">{meanings[0].partOfSpeech}</p>
              <div className="w-full h-[1px] bg-[#E9E9E9] ml-5"></div>
            </div>
            <div className="mt-10">
              <h1 className="font-normal text-xl text-[#757575]">Meaning</h1>
              <ul className="mt-[25px] line list-disc marker:text-[#8F19E8] ml-[47px]">
                {meanings[0].definitions.map((item) => {
                  return (<li key={Math.random()} className="font-normal text-lg  mt-[13px]">
                    {item.definition}
                  </li>)
                })}

              </ul>
              <div className="flex mt-16">
                <p className="text-xl text-[#757575] font-normal">Synonyms</p>
                <p className="ml-[22px] font-bold text-xl text-[#A445ED]">{meanings[0].synonyms[0]}</p>
              </div>
            </div>

          </div>
          <div>
            <div className="flex items-center mt-10">
              <p className="font-bold text-2xl italic">{meanings[1].partOfSpeech ? meanings[1].partOfSpeech : none}</p>
              <div className="w-full h-[1px] bg-[#E9E9E9] ml-5"></div>
            </div>
            <div className="mt-10">
              <h1 className="font-normal text-xl text-[#757575]">Meaning</h1>
              <ul className="mt-[25px] line list-disc marker:text-[#8F19E8] ml-[47px]">
                {meanings[1].definitions.map((item) => {
                  return (<li key={Math.random()} className="font-normal text-lg  mt-[13px]">
                    {item.definition}
                  </li>)
                })}
              </ul>
              {meanings[1].synonyms.length !== 0 && <div className="flex mt-16">
                <p className="text-xl text-[#757575] font-normal">Synonyms</p>
                <p className="ml-[22px] font-bold text-xl text-[#A445ED]">{meanings[1].synonyms[0]}</p>
              </div>}

            </div>

          </div>
          <div className="border-t-[#E9E9E9] border-t-[1px] mt-10 flex">
            <a className="mt-[19px] flex underline font-normal text-sm	decoration-[#757575]" href={sourceUrls[0]} ><span className="text-[#757575] mr-5">Sourse</span>{sourceUrls[0]}<img className="ml-2" src={linkIcon} alt="" /></a>
          </div>
        </div >
      );
    }
  }

}



export default Info;
