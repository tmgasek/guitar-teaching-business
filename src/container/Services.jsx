import { SubHeading } from '../components';
import { guitarLessons, theoryLessons } from '../constants/data';
import ServiceItem from '../components/ServiceItem';

const Services = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <SubHeading title={'Our Services'} />
            <div>Here's what we offer</div>
          </div>

          <div>
            <div>
              <div>Instrument Lessons</div>
              <div>
                {guitarLessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    title={lesson.title}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </div>
            </div>

            <div>
              <img src="/assets/strat.png" alt="guitar-divider" />
            </div>

            <div>
              <div>Theory Lessons</div>
              <div>
                {theoryLessons.map((lesson) => (
                  <ServiceItem
                    key={lesson.title}
                    title={lesson.title}
                    price={lesson.price}
                    length={lesson.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
