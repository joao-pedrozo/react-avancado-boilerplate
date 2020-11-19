import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
};

export const Basic = () => (
    <Main
        title={text('Title', 'React avançado123')}
        description={text(
            'Description',
            'A random description wich you can change anytime you want!'
        )}
    />
);
