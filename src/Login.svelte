<script>
  import Profile from './Profile.svelte';
  import Todos from './Todos.svelte';

  import { auth, googleProvider } from './firebase';
  import { authState } from 'rxfire/auth';

  let user = authState(auth);

  //const unsubscribe = authState(auth).subscribe( u => user = u);

  function login() {
    auth.signInWithPopup(googleProvider);
  }

</script>

<style>
  section {
    background: rgb(235, 235, 235);
    padding: 20px;
  }
</style>

<section>
{#if $user}
  <Profile {...$user} />
  <button on:click={ () => auth.signOut() }>Logout</button>
  <hr>
  <Todos uid={ $user.uid } />
{:else}
  <button on:click={login}>
    Signin with Google
  </button>
{/if}
</section>
