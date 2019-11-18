import { mount } from '@vue/test-utils';
import Sample from '../sample.vue';

describe('Sample Page', () => {
  it('should render logo image', () => {
    const wrapper = mount(Sample);
    const image = wrapper.find('img');
    const logoName = 'logo-sample';
    wrapper.vm.logo = logoName;
    expect(image.attributes().src).toBe(logoName);
  });

  it('should have logo image with right classes', () => {
    const wrapper = mount(Sample);
    const image = wrapper.find('img');
    expect(image.classes()).toContain('rotating');
    expect(image.classes()).toContain('webpack-logo');
  });

  it('should have a title', () => {
    const wrapper = mount(Sample);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Webpack Scaffold');
  });
});
