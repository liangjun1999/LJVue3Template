// App.tsx
import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './style/app.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/home">Home</RouterLink> |
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});