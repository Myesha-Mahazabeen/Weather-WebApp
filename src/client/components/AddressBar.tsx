import React from "react";
import { FormEvent } from "react";

export default function AddressBar({
  onAddressSubmit,
}: {
  onAddressSubmit: (address: string) => Promise<void>;
}) {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const { address } = Object.fromEntries(formData.entries());
    // NOTE: address has type string | File and we should really
    // check that it is a string and throw an error otherwise
    onAddressSubmit(address as string).catch(() => alert("Address not found!"));
  }

  // See https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Address: <input name="address"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
