import BackButton from '../../../../src/components/Button/BackButton.vue';

export default {
    title: 'Button/BackButton',
    component: BackButton,
    argTypes: {
        onPress: { action: 'pressed the button' },
    },
    args: {
        text: 'Storybook Demo is here',
    },
    decorators: [
        (Story) => (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Story />
        </View>
        ),
    ],
};
