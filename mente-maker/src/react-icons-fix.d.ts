// src/react-icons-fix.d.ts

import * as React from "react";

// Garantindo que JSX seja reconhecido corretamente
declare global {
  namespace JSX {
    // Definindo o tipo de 'Element' como React.JSX.Element
    interface Element extends React.JSX.Element {}
    // Definindo IntrinsicElements de maneira segura
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Tipo para representar a árvore de ícones
export interface IconTree {
  tag: string;
  attr: Record<string, string>; // Definindo um tipo para 'attr'
  child: IconTree[]; // Filhos podem ser de tipo recursivo
}

// Definindo as propriedades do ícone (não deixando vazio)
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

// Tipo para representar a função do ícone
export type IconType = (props: IconBaseProps) => React.JSX.Element;

// Garantindo que a função IconBase tenha membros válidos
export declare function IconBase(props: IconBaseProps & { attr?: Record<string, string> }): React.JSX.Element;

// Garantindo que o GenIcon seja declarado corretamente
export declare function GenIcon(data: IconTree): (props: IconBaseProps) => React.JSX.Element;
