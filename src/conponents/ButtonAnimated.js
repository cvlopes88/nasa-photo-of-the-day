import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';













const ButtonAnimated = () => (
    <div>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <Button animated='vertical'>
        <Button.Content hidden>Lets Fly</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
      <Button animated='fade'>
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>Free</Button.Content>
      </Button>
    </div>
  )
  
  export default ButtonAnimated