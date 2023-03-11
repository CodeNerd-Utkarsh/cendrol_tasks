import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    useLocation
} from "react-router-dom"

function One() {
    return (
        <>
            <h1>You Have Reached Component One</h1>
            <a href={`One/Two`}>
                <button>Second</button>
            </a>
        </>
    )
}
function Two() {
    return (
        <>
            <h1>You Have Reached Component Two</h1>
            <a href={`Two/Three`}>
                <button>Third</button>
            </a>
        </>
    )
}
function Three() {
    return (
        <>
            <h1>You Have Reached Component Three</h1>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <a href={`/One`}>
            <button>First</button>
        </a>
    },
    {
        path: "/One",
        element: <One />
    },
    {
        path: "One/Two",
        element: <Two />
    },
    {
        path: "One/Two/Three",
        element: <Three />
    },
])

function BreadCrumbs() {
    return (
        <div className='breadCrumbs' >
            <h2>Task03:- </h2>
            <p>Create a 3 different Components and Add a button in each component with a breadcrumb.
                Consider if u r in first component when click on the button it should go to second component
                and if u click the button of second component it should go to the third component. And In
                breadcrumbs u have to show all 3 components names, when u click any component name it
                should navigate to that particular component.
                Note: Should use only one route no multiple routes are allowed.</p>
            <div className="crumbsList">

            </div>
            <RouterProvider router={router} />

        </div>
    )
}

export default BreadCrumbs
