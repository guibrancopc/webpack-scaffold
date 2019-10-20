import sampleTemplate from './sample.html';
import './sample.scss';

export default () => {
  const wrapper = document.getElementById('app');
  wrapper.innerHTML = sampleTemplate;
}