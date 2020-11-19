import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
    <Main
        title={text('Title', 'React avançado123')}
        description={text(
            'Description',
            'A random description wich you can change anytime you want!'
        )}
    />
);

export const Secondary: Story = () => (
    <Main
        title={text('Title', 'React avançado123123')}
        description={text(
            'Description',
            'A random description wich you can change anytime you want!'
        )}
    />
);
