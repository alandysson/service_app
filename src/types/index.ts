export enum VARIANT {
   PRIMARY,
   SECONDARY
}

export type ItemProps = {
   id: string | null,
   patient: string,
   doctor: string,
   exams: {
      refration: boolean,
      tono: boolean,
   },
   eyedrop1: boolean,
   eyedrop2: boolean,
   eyedrop3: boolean
}

