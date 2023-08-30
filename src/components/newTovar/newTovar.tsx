import React, { FC, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import {
	BoxBtn,
	BoxFields,
	ButtonSubmit,
	ErrorBox,
	FormLabel,
	FormLabelFile,
	Gallery,
	GalleryItem,
	H1,
	ImgCard,
	InputFileStyled,
	InputStyled,
	SelectType,
	Signature,
	TypesSelect,
} from './newTovar.style';
import { TextEditor } from '../utils/textEditor'; 
import { AddTovar } from '../../Types/tovar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import { addTovar } from '../../redux/tovars/tovarsOperations';

const TovarSchema = Yup.object().shape({
	nameUA: Yup.string()
		.min(2, 'пісюн закороткий')
		.max(50, 'Too Long!')
		.required('Обовязкове поле'),
	name: Yup.string()
		.min(2, 'пісюн закороткий')
		.max(50, 'Too Long!')
		.required('Required'),

	descriptionUA: Yup.string().min(2, 'пісюн закороткий').required('Required'),
	parametersUA: Yup.string().min(1, 'пісюн закороткий').required('Required'),
	completeSetUA: Yup.string().min(1, 'пісюн закороткий').required('Required'),

	description: Yup.string().min(2, 'пісюн закороткий').required('Required'),
	parameters: Yup.string().min(1, 'пісюн закороткий').required('Required'),
	completeSet: Yup.string().min(1, 'пісюн закороткий').required('Required'),

	type: Yup.string().required('Required'),
	cost: Yup.number().min(1, 'Зроби нормально').required('Required'),
	quantity: Yup.number().min(1, 'МИ В ГОВНЄ!').required('Required'),
	popularity: Yup.number().min(1, 'Зроби нормально').required('Required'),
});

interface FormValues {
	nameUA: string;
	descriptionUA: string;
	parametersUA: string;
	completeSetUA: string;

	name: string;
	description: string;
	parameters: string;
	completeSet: string;

	type: string;
	cost: number;
	quantity: number;
	popularity: number;
	fotos: FileList | null;
}

interface OtherProps {
	message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
	const { touched, errors, isSubmitting, message } = props;

	const [fotosArray, setFotosArray] = useState<string[]>([]);
	const [first, setFirst] = useState<number | null>(null);

	const types = useAppSelector(selectTypes);

	useEffect(() => {
		async function createFotosArr(fotos: FileList): Promise<string[]> {
			const fotosArr: string[] = [];
			if (FileReader && fotos && fotos.length) {
				for (let i = 0; i < fotos.length; i++) {
					const fr = new FileReader();

					fotosArr.push(await readFotos(fr, fotos[i]));
				}
			}

			return fotosArr;
		}

		async function readFotos(fr: FileReader, file: File): Promise<string> {
			return new Promise((resolve, reject) => {
				fr.onload = () => {
					resolve(fr.result as string);
				};

				fr.onabort = () => {
					reject('Reading aborted');
				};

				fr.onerror = () => {
					reject('Reading error');
				};

				fr.onloadend = () => {
					console.log('Reading finished');
				};

				fr.readAsDataURL(file);
			});
		}

		if (props.values.fotos) {
			createFotosArr(props.values.fotos).then(value => {
				setFotosArray(value);
			});
		}
	}, [props.values.fotos]);

	function dragStartHandler(e: React.DragEvent<HTMLLIElement>, index: number) {
		setFirst(index);
	}

	function dragEndHandler(
		e: React.DragEvent<HTMLLIElement>,
		card: string,
		index: number
	) {
		e.preventDefault();
	}

	function dragOverHandler(e: React.DragEvent<HTMLLIElement>) {
		e.preventDefault();
	}

	function dropHanler(
		e: React.DragEvent<HTMLLIElement>,
		card: string,
		index: number
	) {
		e.preventDefault();

		if ((first || first === 0) && props.values.fotos instanceof FileList) {
			const newFilesFoto = props.values.fotos;
			const secondFile = newFilesFoto[index];
			const firstFile = newFilesFoto[first];

			var dt = new DataTransfer();

			for (let i = 0; i < newFilesFoto.length; i++) {
				if (i === index) {
					dt.items.add(firstFile);
				} else if (i === first) {
					dt.items.add(secondFile);
				} else {
					dt.items.add(newFilesFoto[i]);
				}
			}
			var file_list = dt.files;
			props.setValues(v => {
				return { ...v, fotos: file_list };
			});
			setFirst(null);
		}
	}

	return (
		<Form>
			<H1>{message.toUpperCase()}</H1>
			<BoxFields>
				<FormLabel error={Boolean(touched.nameUA && errors.nameUA)}>
					<Signature>Ім'я</Signature>
					<InputStyled type="text" name="nameUA" />
					{touched.nameUA && errors.nameUA && (
						<ErrorBox>{errors.nameUA}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.name && errors.name)}>
					<Signature>Name</Signature>
					<InputStyled type="text" name="name" />
					{touched.name && errors.name && <ErrorBox>{errors.name}</ErrorBox>}
				</FormLabel>

				<FormLabel
					error={Boolean(touched.descriptionUA && errors.descriptionUA)}
				>
					<Signature>Опис</Signature>
					<TextEditor
						setFieldValue={val => props.setFieldValue('descriptionUA', val)}
						value={props.values.descriptionUA}
					/>
					{touched.descriptionUA && errors.descriptionUA && (
						<ErrorBox>{errors.descriptionUA}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.description && errors.description)}>
					<Signature>Description</Signature>
					<TextEditor
						setFieldValue={val => props.setFieldValue('description', val)}
						value={props.values.description}
					/>

					{touched.description && errors.description && (
						<ErrorBox>{errors.description}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.parametersUA && errors.parametersUA)}>
					<Signature>Параметри</Signature>
					<TextEditor
						setFieldValue={val => props.setFieldValue('parametersUA', val)}
						value={props.values.parametersUA}
					/>
					{touched.parametersUA && errors.parametersUA && (
						<ErrorBox>{errors.parametersUA}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.parameters && errors.parameters)}>
					<Signature>Parameters</Signature>
					<TextEditor
						setFieldValue={val => props.setFieldValue('parameters', val)}
						value={props.values.parameters}
					/>
					{touched.parameters && errors.parameters && (
						<ErrorBox>{errors.parameters}</ErrorBox>
					)}
				</FormLabel>
				<FormLabel
					error={Boolean(touched.completeSetUA && errors.completeSetUA)}
				>
					<Signature>Комплект</Signature>
					<InputStyled type="text" name="completeSetUA" />
					{touched.completeSetUA && errors.completeSetUA && (
						<ErrorBox>{errors.completeSetUA}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.completeSet && errors.completeSet)}>
					<Signature>Complete set</Signature>
					<InputStyled type="text" name="completeSet" />
					{touched.completeSet && errors.completeSet && (
						<ErrorBox>{errors.completeSet}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.type && errors.type)}>
					<Signature>Type </Signature>

					<TypesSelect
						name="type"
						onChange={e => (props.values.type = e.target.value)}
					>
						{types.map(type => (
							<SelectType key={type.id} value={type.en}>
								{type.ukr}
							</SelectType>
						))}
					</TypesSelect>
					{touched.type && errors.type && <ErrorBox>{errors.type}</ErrorBox>}
				</FormLabel>

				<FormLabel error={Boolean(touched.cost && errors.cost)}>
					<Signature>Cost</Signature>
					<InputStyled type="number" name="cost" />
					{touched.cost && errors.cost && <ErrorBox>{errors.cost}</ErrorBox>}
				</FormLabel>

				<FormLabel error={Boolean(touched.quantity && errors.quantity)}>
					<Signature>Quantity</Signature>
					<InputStyled type="number" name="quantity" />
					{touched.quantity && errors.quantity && (
						<ErrorBox>{errors.quantity}</ErrorBox>
					)}
				</FormLabel>

				<FormLabel error={Boolean(touched.popularity && errors.popularity)}>
					<Signature>Popularity</Signature>
					<InputStyled type="number" name="popularity" />
					{touched.popularity && errors.popularity && (
						<ErrorBox>{errors.popularity}</ErrorBox>
					)}
				</FormLabel>

				<FormLabelFile>
					<Signature>Завантажити файл</Signature>
					<InputFileStyled
						type="file"
						multiple
						accept="image/*,.pdf,.png"
						onChange={event => {
							props.setFieldValue('fotos', event.currentTarget.files);
						}}
					/>

					{/* <div>{props.values.fotos !== null && props.values.fotos[0].name }</div> */}

					{touched.fotos && errors.fotos && <ErrorBox>{errors.fotos}</ErrorBox>}
				</FormLabelFile>
				<div>
					{fotosArray.length > 0 && (
						<Gallery>
							{fotosArray.map((foto, index) => (
								<GalleryItem
									key={index}
									draggable={true}
									onDragStart={e => dragStartHandler(e, index)}
									onDragLeave={e => dragEndHandler(e, foto, index)}
									onDragEnd={e => dragEndHandler(e, foto, index)}
									onDragOver={e => dragOverHandler(e)}
									onDrop={e => dropHanler(e, foto, index)}
								>
									{' '}
									<ImgCard src={foto} alt="" />
								</GalleryItem>
							))}
						</Gallery>
					)}
				</div>
			</BoxFields>

			<BoxBtn>
				<ButtonSubmit type="submit" disabled={isSubmitting}>
					Submit
				</ButtonSubmit>
			</BoxBtn>
		</Form>
	);
};

interface MyFormProps {
	initialEmail?: string;
	message: string;
	submit: Function;
}

const MyForm = withFormik<MyFormProps, FormValues>({
	mapPropsToValues: props => {
		return {
			nameUA: 'Hookah',
			descriptionUA: '<p>Lyaps</p>',
			parametersUA: '-',
			completeSetUA: '-',

			name: 'Hookah',
			description: '<p>Lyaps</p>',
			parameters: '-',
			completeSet: '-',

			type: 'hookahs',
			cost: 1,
			quantity: 1,
			popularity: 1,
			fotos: null,
		};
	},

	validationSchema: TovarSchema,

	handleSubmit: (values, formikBag ) => {
		const form = new FormData();
		if (values.fotos) {
			for (let index = 0; index < values.fotos.length; index++) {
				form.append(`files`, values.fotos[index]);
			}
		}
		const tovar: AddTovar = {
			nameUKR: values.nameUA,
			nameEN: values.name,

			descriptionUKR: values.descriptionUA,
			descriptionEN: values.description,

			parametersUKR: values.parametersUA,
			parametersEN: values.parameters,

			completeSetUKR: values.completeSetUA,
			completeSetEN: values.completeSet,

			type: values.type,
			cost: values.cost,
			quantity: values.quantity,
			popularity: values.popularity,
			fotos: [],
		};
		form.append('tovar', JSON.stringify(tovar));
		formikBag.props.submit(form)
	},
})(InnerForm);
type NewTovarProps = {};

const NewTovar: FC<NewTovarProps> = props => {
	const dispatch = useAppDispatch();
	return (
		<div>
			<MyForm
				submit={(form: any) => dispatch(addTovar(form))}
				message="add tovarchik"
			/>
		</div>
	);
};

export default NewTovar;
