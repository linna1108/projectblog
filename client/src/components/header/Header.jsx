import "./header.css"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <div>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.15752-9/277686955_1046126845997376_8130594196544227393_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=fsRI3QyeSTQAX90YmHJ&tn=jrv-LKCYbd5jCiop&_nc_ht=scontent.fsgn2-2.fna&oh=03_AVK_JOCeIDUAjmm5edc5XSUJYlZX1z78exeqHSzvlId-WA&oe=6279B81B' alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/277689919_773286453641882_4698166857043570614_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=4lHmQ4vs0U4AX-V3rih&tn=jrv-LKCYbd5jCiop&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVJsWYvr53ZzezQM2MU5d8YU1n0SRI2iv-v3ggBvzkb1TA&oe=627BAB39' alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/277416697_983321265908222_512976178656207731_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WNrVd1mxfSUAX-GgQgF&tn=jrv-LKCYbd5jCiop&_nc_ht=scontent.fsgn2-1.fna&oh=03_AVJaokyDim9c6RnaZKhnzVn0aAfS6w7ZdwUFOwxqeHr5Sw&oe=627A780D' alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  )
}
