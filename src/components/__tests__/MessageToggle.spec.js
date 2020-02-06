import Vue from 'vue'
import MainSidebar from '@/components/MainSidebar.vue'

describe('MainSidebar', () => {
  it('has a created hook', () => {
    expect(typeof MainSidebar.created).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof MainSidebar.data).toBe('function')
    const defaultData = MainSidebar.data()
    expect(defaultData.logo).toBe('Projectus')
  })
})
