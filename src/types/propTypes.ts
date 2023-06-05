import { useFormik } from 'formik';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import StateType from './stateTypes';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export interface AccordionProps {
  children: ReactNode;
  headerTxt: string;
  eventKey: string;
}

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  txt: string;
  style?: string;
  variant?: string;
}

export interface CarouselTextProps {
  content: {
    Icon: IconType;
    headerTxt: string;
    body: string;
  };
}

export interface ProfileCardProps {
  user: {
    user: {
      name: string;
      email: string;
    };
  } | null;
}

export interface InputProps {
  formik: {
    touched: any;
    handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
    values: {
      [key: string]: string | number | string[] | undefined;
    };
    errors: {
      [key: string]: string | number | string[] | undefined;
    };
  };
  type?: string;
  name: string;
}

export interface UseFormProps {
  formik: ReturnType<typeof useFormik>;
  isSignIn: boolean;
  validated: boolean;
  toggleIsSignIn: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface ModalProps {
  children: React.ReactNode;
  openModalTxt: string;
  modalHeaderTxt: string;
  btnVariant?: string;
  onBtnClick?: () => void;
}

export interface NavItemProps {
  link: string;
  Icon: IconType;
  linkTxt: string;
  fontSize?: string;
  handleToggleSidebar: () => void;
}

export interface NavBarTextProps {
  handleToggleSidebar: () => void;
}

export interface NavItemsProps {
  style: string;
  fontSize?: string;
  handleToggleSidebar: () => void;
}

export interface SideBarProps {
  handleCloseSidebar: () => void;
  sidebarOpen: boolean;
}

export interface PageWrapperProps {
  pageName: string;
  Icon: IconType;
  children: React.ReactNode;
  FeatureBar?: React.ComponentType;
  iconStyle?: string;
}

export interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: string;
}
export interface ToggleSubjectAccordionProps {
  children: React.ReactNode;
  eventKey: string;
  headerTxt: string;
}

export interface YearsForSubjectProps {
  subjectName: string;
}

export interface ParamsModalProps {
  startTest: () => void;
}

export interface OptionProps {
  index: number;
  option: string;
}

export interface QuestionHeaderProps {
  userChoice?: string;
  examtype: string;
  section: string;
}

export interface SubmitTestBtnProps {
  testSubmitted: boolean;
  dispatch: Dispatch<AnyAction>;
  state: StateType;
}
