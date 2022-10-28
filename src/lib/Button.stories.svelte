<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';
</script>

<Meta
    title="Button"
    component={Button}
/>

<Template let:args>
    <Button {...args}>
        <span slot="label">
            Button Text
        </span>
    </Button>
</Template>

<Story
    name="Default"
    args={{
        color: 'primary',
        size: 'lg',
        variation: 'solid',
    }}
/>
