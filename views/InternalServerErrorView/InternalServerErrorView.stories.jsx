// Component import
import InternalServerErrorView from './InternalServerErrorView';

// Decorator import
import { fullHeightStoryDecorator } from '../../.storybook/decorators';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Pages/InternalServerError',
  component: InternalServerErrorView,
  decorators: [fullHeightStoryDecorator]
};

// 'Template' defining how the 'args' map to the component rendering
function Template() {
  return <InternalServerErrorView />;
}

// View story
export const View = Template.bind({});
