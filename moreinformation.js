/*

JAVASCRIPT AND REDUX /////

Get a date as a string, using the ISO standard:
const d = new Date();
let text = d.toISOString();

BIOLOGY

A proteome is the complete set of proteins expressed by an organism. 
The term can also be used to describe the assortment of proteins 
produced at a specific time in a particular cell or tissue type.

Proteomics typically gives us a better understanding of an organism than genomics.

Cells have different proteomes depending on their cell type. 
There are thus at least 250 different proteomes corresponding 
to the 250 cell types in the human body. 
The proteome depends on many factors. 
For example, different proteins may be produced 
depending on an organism's age, diet and state of health.

Proteins from 1,434 genes annotated in the KEGG metabolism database 
were quantified across the 32 tissues (Table S5). //////
Liver was found to have the largest number of enriched metabolic proteins, 
followed by brain, muscle, and heart.

REDUX

/// to install redux devtools on console go to chrome web store search
redux and click on react devtools and install will be or should be on the
far right of the inspect thing ///////

yarn global add react-devtools ///////

npm install -g react-devtools  

react-devtools  put in terminal to view stuff ////

createAsyncThunk
Overview
A function that accepts a Redux action type string and a callback 
function that should return a promise. It generates promise 
lifecycle action types based on the action type prefix that you pass in, 
and returns a thunk action creator 
that will run the promise callback and dispatch the lifecycle actions 
based on the returned promise.

This abstracts the standard recommended approach for handling async request lifecycles.

It does not generate any reducer functions, since it does not know what data 
you're fetching, how you want to track loading state, or how the data you 
return needs to be processed. You should write your own reducer logic that 
handles these actions, with whatever loading state and processing logic is 
appropriate for your own app.

TIP
Redux Toolkit's RTK Query data fetching API is a purpose built data 
fetching and caching solution for Redux apps, and can eliminate the need 
to write any thunks or reducers to manage data fetching. We encourage you 
to try it out and see if it can help simplify the data fetching code in your own apps!

Sample usage:

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

interface UsersState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123))

npm install @reduxjs/toolkit react-redux // can view this infomation in package.json

can install json server npm i json-server -g  (g means globally)

npm i json-server -g

This is another command for terminal

json-server --watch data/db.json --port 3500

In apiSlice.js we import createApi and fetchBaseQuery both of which come from redux js toolkit query slash react

createApi is a command used in there it defines the apiSlice

builder.

Adds a "default case" reducer that is executed if no case reducer 
and no matcher reducer was executed for this action.

injectEndpoints accepts a collection of endpoints, as well as an optional overrideExisting parameter.

Calling injectEndpoints will inject the endpoints into the original API, 
but also give you that same API with correct types for these endpoints back. 
(Unfortunately, it cannot modify the types for the original definition.)

RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

RTK Query is an optional addon included in the Redux Toolkit package, 
and its functionality is built on top of the other APIs in Redux Toolkit.

RTK Query takes inspiration from other tools that have pioneered solutions for data fetching, like Apollo Client, React Query, Urql, and SWR, but adds a unique approach to its API design:

    The data fetching and caching logic is built on top of Redux Toolkit's createSlice and createAsyncThunk APIs
    Because Redux Toolkit is UI-agnostic, RTK Query's functionality can be used with any UI layer
    API endpoints are defined ahead of time, including how to generate query parameters from arguments and transform responses for caching
    RTK Query can also generate React hooks that encapsulate the entire data fetching process, provide data and isLoading fields to components, and manage the lifetime of cached data as components mount and unmount
    RTK Query provides "cache entry lifecycle" options that enable use cases like streaming cache updates via websocket messages after fetching the initial data
    We have early working examples of code generation of API slices from OpenAPI and GraphQL schemas
    Finally, RTK Query is completely written in TypeScript, and is designed to provide an excellent TS usage experience

    RTK Query includes these APIs:

    createApi(): The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
    fetchBaseQuery(): A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
    <ApiProvider />: Can be used as a Provider if you do not already have a Redux store.
    setupListeners(): A utility used to enable refetchOnMount and refetchOnReconnect behaviors.

    The providesTags property for the query endpoint is used to provide the tag names to caches, 
    and the invalidatesTags property for the mutation endpoint is used to remove them from caches.

    To install toolkit maybe /// 

    npm install @reduxjs/toolkit react-redux axios

    BaseQueryFn is a promise that should resolve our request 
    with some data or reject it with an error object. 
    Here, we receive axios simple request configs from our 
    queries and perform the API fetching with axios. 
    Then we will return data if everything was fine. 
    Otherwise, we reject it with the error object. 
    Make sure to return data or errors in an object, 
    otherwise, rtk-query doesn’t understand it.

    Besides re-exporting createSelector, RTK also exports a wrapped version of createSelector named createDraftSafeSelector that allows you to create selectors that can safely be used inside of createReducer and createSlice reducers with Immer-powered mutable logic. When used with plain state values, the selector will still memoize normally based on the inputs. But, when used with Immer draft values, the selector will err on the side of recalculating the results, just to be safe.

All selectors created by entityAdapter.getSelectors are "draft safe" selectors by default.

The nullish coalescing (??) operator is a logical operator 
that returns its right-hand side operand when 
its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand. 

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0


configureStore

A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience.
Parameters

configureStore accepts a single configuration object parameter, with the following options:

type ConfigureEnhancersCallback = (
  defaultEnhancers: EnhancerArray<[StoreEnhancer]>
) => StoreEnhancer[]

interface ConfigureStoreOptions<
  S = any,
  A extends Action = AnyAction,
  M extends Middlewares<S> = Middlewares<S>
> {
  /**
   * A single reducer function that will be used as the root reducer, or an
   * object of slice reducers that will be passed to `combineReducers()`.
   
  reducer: Reducer<S, A> | ReducersMapObject<S, A>

  
   * An array of Redux middleware to install. If not supplied, defaults to
   * the set of middleware returned by `getDefaultMiddleware()`.
   
  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M

  /**
   * Whether to enable Redux DevTools integration. Defaults to `true`.
   *
   * Additional configuration can be done by passing Redux DevTools options
   
  devTools?: boolean | DevToolsOptions

  /**
   * The initial state, same as Redux's createStore.
   * You may optionally specify it to hydrate the state
   * from the server in universal apps, or to restore a previously serialized
   * user session. If you use `combineReducers()` to produce the root reducer
   * function (either directly or indirectly by passing an object as `reducer`),
   * this must be an object with the same shape as the reducer map keys.
   
  preloadedState?: DeepPartial<S extends any ? S : S>

  /**
   * The store enhancers to apply. See Redux's `createStore()`.
   * All enhancers will be included before the DevTools Extension enhancer.
   * If you need to customize the order of enhancers, supply a callback
   * function that will receive the original array (ie, `[applyMiddleware]`),
   * and should return a new array (such as `[applyMiddleware, offline]`).
   * If you only need to add middleware, you can use the `middleware` parameter instead.
   
  enhancers?: StoreEnhancer[] | ConfigureEnhancersCallback
}

function configureStore<S = any, A extends Action = AnyAction>(
  options: ConfigureStoreOptions<S, A>
): EnhancedStore<S, A>

JAVA

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\Ethan\IdeaProjects\demo> javac HelloApplication.java
error: file not found: HelloApplication.java
Usage: javac <options> <source files>
use --help for a list of possible options
PS C:\Users\Ethan\IdeaProjects\demo> dir


    Directory: C:\Users\Ethan\IdeaProjects\demo


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         9/18/2023   7:35 PM                .idea
d-----         9/18/2023   7:28 PM                .mvn
d-----         9/18/2023   7:28 PM                src
d-----         9/18/2023   7:38 PM                target
-a----         9/18/2023   7:28 PM            490 .gitignore
-a----         9/18/2023   7:28 PM          10284 mvnw
-a----         9/18/2023   7:28 PM           6734 mvnw.cmd
-a----         9/18/2023   7:28 PM           2857 pom.xml


PS C:\Users\Ethan\IdeaProjects\demo> cd ..
PS C:\Users\Ethan\IdeaProjects> cd ..
PS C:\Users\Ethan> javacom.example.demo.HelloApplication 
javacom.example.demo.HelloApplication : The term 'javacom.example.demo.HelloApplication' is not recognized as the name of a cmdlet, function, script file, or 
operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ javacom.example.demo.HelloApplication
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (javacom.example.demo.HelloApplication:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\Ethan> 

Java was developed by James Gosling in 1995

package com.example.demo;


public class HelloApplication {

    public static void main(String[] args) {
        int myage = 40;
        int herage = myage;
        // int age = 30;
        // int temperature = 20;
        // age = 35;  
        System.out.println(herage);
    }
}

java.awt

Contains all of the classes for creating user interfaces and for painting graphics and 
images. A user interface object such as a button or a scrollbar is called, 
in AWT terminology, a component. The Component class is the root of all AWT components. 
See Component for a detailed description of properties that all AWT components share.
Some components fire events when a user interacts with the components. 
The AWTEvent class and its subclasses are used to represent the events 
that AWT components can fire. See AWTEvent for a description of the AWT event model.
A container is a component that can contain components and other containers. 
A container can also have a layout manager that controls the visual placement 
of components in the container. The AWT package contains several layout manager 
classes and an interface for building your own layout manager. See Container and 
LayoutManager for more information.
Each Component object is limited in its maximum size and its location because the values 
are stored as an integer. Also, a platform may further restrict maximum size and location
 coordinates. The exact maximum values are dependent on the platform. 
 There is no way to change these maximum values, either in Java code or in native code. 
 These limitations also impose restrictions on component layout. If the bounds of a 
 Component object exceed a platform limit, there is no way to properly arrange them 
 within a Container object. The object's bounds are defined by any object's coordinate 
 in combination with its size on a respective axis.

CHEMISTRY

Bohr Radius 

It is named after Niels Bohr, due to its role in the Bohr model of an atom.

where

    ε 0 \varepsilon _{0} is the permittivity of free space,
    ℏ \hbar is the reduced Planck constant,
    m e {\displaystyle m_{\text{e}}} is the mass of an electron,
    e e is the elementary charge,
    c c is the speed of light in vacuum, and
    α \alpha is the fine-structure constant.

The CODATA value of the Bohr radius (in SI units) is 5.29177210903(80)×10−11 m.[1] 

PHYSICS

the constant speed that a freely falling object eventually 
reaches when the resistance of the medium through which it 
is falling prevents further acceleration.

What is the cosmological time dilation?
Detection of the cosmological time dilation of high-redshift ...
A fundamental consequence of the relativistic picture of expanding space 
is cosmological time dilation, where events in the distant universe 
appear to run slowly compared with those in the local cosmos

PHOTOSHOP

tT on top of screen to make text larger like 1012px to 1014px

Adujustment layer on bottom right cirle half black half white exposure 
Exposure can put behind text and can decrease exposure can lessen brightness of background

select the move tool and click on the three ... dots on the top screen click align to canvas and then
you can center it according to the canvas the buttons right next show transfrom controls to align things 
and can center or move to left,etc. with this with other things

press c for cropped tool make sure delete cropped pixels is not checked off

can make layers of pieces with the same shortcut 

ctrl t mac command t 

can selects fonts from top of the screen

ctrl t with move icon selected

options or alt to copy something 

can manipulate color on the top screen click on white rectangle

to check if everything is aligned go to view on top menu and look if 
snap is checked can snap to everything 
if something is on the same line it will snap to it and 
it will indicate with pink lines

ctrl shift n command shift n on mac 
gives you new layer 

overlay hides everything that is 50% gray
blend modes 
select layer convert for smart filters in filter menu on top
can add noise from filter menu 

uniform and gaussian
if you dont want color noise select monochromatic 

can manipulate blur in filter menu 

color lookup allows you to apply look up tables to ur images ////
can download free luts from internet can create them

ctrl or command a to select entire canvas 

alt or option and press the mask icon or whatever to see 
just that ////
can hold alt or option and press the mask again to revert back
to original form

hold alt and click on line in between two layers down arrow
shows up ////

double click on the adjustment layer symbol to open up its
properties 

right click on empty space on the right or maybe whatevs options for thumbnails
panel options can pick thumbnail size

ctrl s to save
mask button on bottom right

rectanlge lets you out a rectangle on photo and can change color

fill layers adustment //// generally fill and opacity are same except in 2 
special conditions

... /////

 // for making vite react app

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npm create vite@latest ./ -- --template react         
? Package name: » millertech-portfolio

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npm install -D tailwindcss                            

added 308 packages, and audited 309 packages in 20s

104 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Ethan\Desktop\MillerTech Portfolio> 

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npx tailwindcss init                                  
                                                                                                      
Created Tailwind CSS config file: tailwind.config.js
PS C:\Users\Ethan\Desktop\MillerTech Portfolio> 

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npm install --legacy-peer-deps // watch out putting this in may not be correct

up to date, audited 309 packages in 649ms

104 packages are looking for funding 
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Ethan\Desktop\MillerTech Portfolio> 

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npm install --legacy-peer-deps @react-three/fiber

added 14 packages, and audited 323 packages in 3s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Ethan\Desktop\MillerTech Portfolio> 

PS C:\Users\Ethan\Desktop\MillerTech Portfolio> npm install --legacy-peer-deps @react-three/drei 

added 45 packages, and audited 368 packages in 6s

107 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Ethan\Desktop\MillerTech Portfolio> 


JAVA

Many APIs require a fair amount of boilerplate code. For example, in order to write a JAX-RPC web service, you must provide a paired interface and implementation. This boilerplate could be generated automatically by a tool if the program were “decorated” with annotations indicating which methods were remotely accessible.

Other APIs require “side files” to be maintained in parallel with programs. For example JavaBeans requires a BeanInfo class to be maintained in parallel with a bean, and Enterprise JavaBeans (EJB) requires a deployment descriptor. It would be more convenient and less error-prone if the information in these side files were maintained as annotations in the program itself.

The Java platform has always had various ad hoc annotation mechanisms. For example the transient modifier is an ad hoc annotation indicating that a field should be ignored by the serialization subsystem, and the @deprecated javadoc tag is an ad hoc annotation indicating that the method should no longer be used. The platform has a general purpose annotation (also known as metadata) facility that permits you to define and use your own annotation types. The facility consists of a syntax for declaring annotation types, a syntax for annotating declarations, APIs for reading annotations, a class file representation for annotations, and annotation processing support provided by the javac tool.

Annotations do not directly affect program semantics, but they do affect the way programs are treated by tools and libraries, which can in turn affect the semantics of the running program. Annotations can be read from source files, class files, or reflectively at run time.

Annotations complement javadoc tags. In general, if the markup is intended to affect or produce documentation, it should probably be a javadoc tag; otherwise, it should be an annotation.

Typical application programmers will never have to define an annotation type, but it is not hard to do so. Annotation type declarations are similar to normal interface declarations. An at-sign (@) precedes the interface keyword. Each method declaration defines an element of the annotation type. Method declarations must not have any parameters or a throws clause. Return types are restricted to primitives, String, Class, enums, annotations, and arrays of the preceding types. Methods can have default values. Here is an example annotation type declaration:

/**
 * Describes the Request-For-Enhancement(RFE) that led
 * to the presence of the annotated API element.
 
public @interface RequestForEnhancement {
  int    id();
  String synopsis();
  String engineer() default "[unassigned]"; 
  String date()    default "[unimplemented]"; 
}

Once an annotation type is defined, you can use it to annotate declarations. An annotation is a special kind of modifier, and can be used anywhere that other modifiers (such as public, static, or final) can be used. By convention, annotations precede other modifiers. Annotations consist of an at-sign (@) followed by an annotation type and a parenthesized list of element-value pairs. The values must be compile-time constants. Here is a method declaration with an annotation corresponding to the annotation type declared above:

@RequestForEnhancement(
  id       = 2868724,
  synopsis = "Enable time-travel",
  engineer = "Mr. Peabody",
  date     = "4/1/3007"
)
public static void travelThroughTime(Date destination) { ... }

An annotation type with no elements is termed a marker annotation type, for example:


* Indicates that the specification of the annotated API element
* is preliminary and subject to change.

public @interface Preliminary { }

It is permissible to omit the parentheses in marker annotations, as shown below:

@Preliminary public class TimeTravel { ... }

In annotations with a single element, the element should be named value, as shown below:


* Associates a copyright notice with the annotated API element.

public @interface Copyright {
  String value();
}

It is permissible to omit the element name and equals sign (=) in a single-element annotation whose element name is value, as shown below:

@Copyright("2002 Yoyodyne Propulsion Systems")
public class OscillationOverthruster { ... }

To tie it all together, we'll build a simple annotation-based test framework. First we need a marker annotation type to indicate that a method is a test method, and should be run by the testing tool:

import java.lang.annotation.*;


* Indicates that the annotated method is a test method.
* This annotation should be used only on parameterless static methods.

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Test { }

Note that the annotation type declaration is itself annotated. Such annotations are called meta-annotations. The first (@Retention(RetentionPolicy.RUNTIME)) indicates that annotations with this type are to be retained by the VM so they can be read reflectively at run-time. The second (@Target(ElementType.METHOD)) indicates that this annotation type can be used to annotate only method declarations.

Here is a sample program, some of whose methods are annotated with the above interface:

public class Foo {
  @Test public static void m1() { }
  public static void m2() { }
  @Test public static void m3() {
      throw new RuntimeException("Boom");
  }
  public static void m4() { }
  @Test public static void m5() { }
  public static void m6() { }
  @Test public static void m7() {
      throw new RuntimeException("Crash");
  }
  public static void m8() { }
}

Here is the testing tool:

import java.lang.reflect.*;

public class RunTests {
 public static void main(String[] args) throws Exception {
    int passed = 0, failed = 0;
    for (Method m : Class.forName(args[0]).getMethods()) {
       if (m.isAnnotationPresent(Test.class)) {
          try {
             m.invoke(null);
             passed++;
          } catch (Throwable ex) {
             System.out.printf("Test %s failed: %s %n", m, ex.getCause());
             failed++;
          }
       }
    }
    System.out.printf("Passed: %d, Failed %d%n", passed, failed);
 }
}

The tool takes a class name as a command line argument and iterates over all the methods of the named class attempting to invoke each method that is annotated with the Test annotation type (defined above). The reflective query to find out if a method has a Test annotation is highlighted in green. If a test method invocation throws an exception, the test is deemed to have failed, and a failure report is printed. Finally, a summary is printed showing the number of tests that passed and failed. Here is how it looks when you run the testing tool on the Foo program (above):

$ java RunTests Foo
Test public static void Foo.m3() failed: java.lang.RuntimeException: Boom 
Test public static void Foo.m7() failed: java.lang.RuntimeException: Crash 
Passed: 2, Failed 2

While this testing tool is clearly a toy, it demonstrates the power of annotations and could easily be extended to overcome its limitations.


FRONT END STUFF FOR COURSE
*/


