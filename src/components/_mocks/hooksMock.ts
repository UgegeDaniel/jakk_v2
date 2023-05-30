import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import useForm from '../Form/useForm';

export const mockDispatch: any = () => useDispatch();
export const mockNavigate: any = () => useNavigate();
export const mockUseForm: any = () => useForm();
export const mockMediaQuery: any = () => useMediaQuery({ query: '(max-width: 992px)' });
