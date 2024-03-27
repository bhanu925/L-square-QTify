import React from 'react'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import { useOutletContext } from 'react-router-dom'
export default function Homepage() {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums} = data;
  return (
    <>
        <Hero/>
        <Section title="Top Albums" data={topAlbums} type={'album'}/>
        <Section title="New Albums" data={newAlbums} type={'album'}/>
    </>
  )
}
