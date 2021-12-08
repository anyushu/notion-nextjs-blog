import Heading from '../atoms/Heading'

const Hero = () => {
  return (
    <div className="container px-3 md:px-0 mx-auto mb-12 md:mb-24">
      <Heading h={2} className="tracking-wider leading-relaxed">
        I am a front-end engineer.
        <br />
        <small>PHP / Laravel / Next.js / Typescript</small>
      </Heading>
    </div>
  )
}

export default Hero
