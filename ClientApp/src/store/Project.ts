import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ProjectState {
    dataId: string;
    sectiondataId: string;
    leftArrowHref: string;
    rightArrowHref: string;
    title: string;
    img: string;
    description: [];
    nextPage: number;
    status: string;
    count: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.


export interface ReactProjectAction { type: 'REACT_PROJECT' }
export interface AngularProjectAction { type: 'ANGULAR_PROJECT' }
export interface DenzelAwuahProjectAction { type: 'DENZELAWUAH_PROJECT' }
export interface CRMProjectAction { type: 'CRM_PROJECT' }
export interface JavaProjectAction { type: 'JAVA_PROJECT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ReactProjectAction | AngularProjectAction
    | DenzelAwuahProjectAction | CRMProjectAction | JavaProjectAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    react: () => ({ type: 'REACT_PROJECT' } as ReactProjectAction),
    angular: () => ({ type: 'ANGULAR_PROJECT' } as AngularProjectAction),
    denzel: () => ({ type: 'DENZELAWUAH_PROJECT' } as DenzelAwuahProjectAction),
    crm: () => ({ type: 'CRM_PROJECT' } as CRMProjectAction),
    java: () => ({ type: 'JAVA_PROJECT' } as JavaProjectAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ProjectState> = (state: ProjectState | undefined, incomingAction: Action): ProjectState => {
    if (state === undefined) {
        return {
            dataId: "",
            sectiondataId: "",
            leftArrowHref: "",
            rightArrowHref: "",
            title: "",
            img: "",
            description: [],
            nextPage: 0,
            status: "",
            count: 0
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REACT_PROJECT':
            return {
                dataId: "reactapp",
                sectiondataId: "angularSite",
                leftArrowHref: "#java",
                rightArrowHref: "#angularSite",
                title: "React Word-Processor App",
                img: "img/wordApp.jpg",
                description: [],
                nextPage: 0,
                status: "",
                count: 0
            };
        case 'ANGULAR_PROJECT':
            return {
                dataId: "angularSite",
                sectiondataId: "reactapp",
                leftArrowHref: "#reactapp",
                rightArrowHref: "#denzelawuah_portfolio",
                title: "Soccer Statistics Website",
                img: "img/home1.jpg",
                description: [],
                nextPage: 0,
                status: "",
                count: 0
            };
        case 'DENZELAWUAH_PROJECT':
            return {
                dataId: "denzelawuah-portfolio",
                sectiondataId: "angularSite",
                leftArrowHref: "#angularSite",
                rightArrowHref: "#crm",
                title: "Node js Portfolio Website",
                img: "img/hackdenzel3.jpg",
                description: [],
                nextPage: 0,
                status: "",
                count: 0
            };
        case 'CRM_PROJECT':
            return {
                dataId: "crm",
                sectiondataId: "crm",
                leftArrowHref: "#denzelawuah_portfolio",
                rightArrowHref: "#java",
                title: "CRM Website for Trent Community Research Center",
                img: "img/crm2.jpg",
                description: [],
                nextPage: 0,
                status: "",
                count: 0
            };
        case 'JAVA_PROJECT':
            return {
                dataId: "java",
                sectiondataId: "java",
                leftArrowHref: "#crm",
                rightArrowHref: "#reactapp",
                title: "Java Chatting Application",
                img: "img/chat3.jpg",
                description: [],
                nextPage: 0,
                status: "",
                count: 0
            };
        default:
            return state;
    }
};
