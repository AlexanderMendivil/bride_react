import { Fade, Slide } from 'react-slideshow-image';

const slides = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png',
      caption: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/4mVNVUybMXXJ5k-PuXHwqwBFDLUZbAuSxa7xcypndKhFZ9RPEGVcoXpU9mLQL6lGg3z3Cvp5pJFWDXwKiYDPWOH9zQ=w640-h400-e365-rj-sc0x00ffffff',
      caption: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcOhU4Ej0qKpZrjffn3KwbyD9quINYnlCrw&usqp=CAU',
      caption: 'Slide 3',
    },
  ];

export const SlideShow = () => {
  return (
    <Slide
  arrows={false}
  transitionDuration={1000}
  indicators={true}
  infinite={true}
>
  {slides.map((slide) => (
    <div key={slide.id} className="each-fade">
      <div style={{width: '100%', height: '100%'}}>
        <img style={{width: '100%', height: '100%'}} src={slide.image} alt={slide.caption} />
      </div>
      <p>{slide.caption}</p>
    </div>
  ))}
</Slide>
  )
}
