import { SubHeading } from '../components';

const Header = () => (
  <div id="home">
    <div>
      <div>
        <SubHeading title={'Encouraging Text'} />
        <div>A simple introduction statement</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          ornare nibh. Suspendisse dignissim id justo quis interdum. Phasellus
          ut tellus porta, feugiat mi eu, ullamcorper massa. Nullam dignissim
          tempus nisi, vel bibendum justo tristique quis. Etiam nec ligula non
          neque varius cursus ac a nunc. Fusce laoreet egestas enim,{' '}
        </div>
      </div>

      <div>
        <img src="/assets/guitar-keanu.webp" alt="header img" />
      </div>
    </div>
  </div>
);

export default Header;
