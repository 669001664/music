import React from "react"
import { useLocalStore, Observer } from "mobx-react-lite";
import AuthStore from "store/authStore"

const Discovery = (): JSX.Element => {
  const localStore = useLocalStore(() => AuthStore);
  return <Observer>{() => <div>{localStore.count}</div>}</Observer>
}

export default Discovery 