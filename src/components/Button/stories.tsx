import { Meta, Story } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const FirstStory: Story = (args) => {
  return <Button {...args} />
}
