import { mount, shallowMount } from '@vue/test-utils';
import MainContent from '../components/MainContent.vue';
import ModalAddTasks from '../components/ModalWindows/ModalAddTasks.vue';
import MainHeader from '../components/MainHeader.vue';
import { ITask, eStatus } from '@/types/tasks';

describe('MainContent', () => {
  const wrapper = mount(MainContent);
  test('is instance vue Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('ModalAddTasks', () => {
  const wrapper = shallowMount(ModalAddTasks);
  test('has a created hook', () => {
    expect(typeof ModalAddTasks.created).toBe(true);
  });
});

describe('MainHeader', () => {
  test('displays title text', () => {
    const wrapper = mount(MainHeader);
    const span = wrapper.find('.navbar-title-left-text');
    expect(p.text()).toBe('Website Redesign');
  });
});
