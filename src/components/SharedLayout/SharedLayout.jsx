import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from "../Header/Header"

export default function SharedLayout() {
    return (
        <>
      <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main><Outlet /></main>
        </Suspense>
    </>
    )
}