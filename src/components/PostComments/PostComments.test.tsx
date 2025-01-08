import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index'; 


describe('Teste para o componente Post', () => {    
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument(); 
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />); 

        const textarea = screen.getByTestId('comment-textarea'); 
        const button = screen.getByTestId('submit-button'); 
        
      
        fireEvent.change(textarea, { target: { value: 'Este é o primeiro comentário!' } });        
      
        fireEvent.click(button);
        
  
        expect(screen.getByText('Este é o primeiro comentário!')).toBeInTheDocument();
 
        fireEvent.change(textarea, { target: { value: 'Este é o segundo comentário!' } });
        
  
        fireEvent.click(button);        

        expect(screen.getByText('Este é o segundo comentário!')).toBeInTheDocument();
    });
});
